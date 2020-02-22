const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Task  = require('./task');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
        },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error ('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        validate(value) {
            if (value < 0) {
                throw new Error ('Age must be a positive number')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true
});

userSchema.virtual('tasks', {
    ref: 'Task',
    //localField is the User model field that would be bound
    //to the foreign field in the Task model
    localField: '_id',
    foreignField: 'owner'
})


//The object's 'toJSON' method gets called by JSON.stringify internally, and Express uses
//JSON.stringify when sending a response, so we can control what gets stringified.
userSchema.methods.toJSON = function() {
    const user = this;
    //Note: took me 40 minutes of debugging to find out that
    //using const instead of let here throws an error, because
    //we spread the userObject and assign it to itself in the next line...
    let userObject = user.toObject();
    ({password, tokens, ...userObject} = userObject);
    return userObject
}

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user.id.toString()}, 'thisismysecret');
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if(!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        throw new Error('Unable to login')
    }
    return user;
}

//Hash the plain password before saving in the DB
userSchema.pre('save', async function (next) {
    const user = this;
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
});

//delete user tasks when user is removed
userSchema.pre('remove', async function() {
    const user = this;
    await Task.deleteMany({ owner: user.id});
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;