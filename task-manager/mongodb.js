const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';
const id = new ObjectID();
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to server')
    } 
    
    const db = client.db(databaseName);
    // db.collection('users').findOne({ _id: new ObjectID("5e2df3025b81d72d34b677e6") }, (error, user) => {
    //     if(error) { return console.log("Unable to fetch")}

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 31 }).count((error, users) => {
    //     console.log(users)
    // });

    // db.collection('tasks').findOne({ '_id': new ObjectID('5e2df0986001430a3c832c5a') }, (error, task) => {
    //     console.log(task)
    // });

    // db.collection('tasks').find({ completed: false }).toArray((tasks) => {
    //     console.log(tasks)
    // })

    // const updatePromise = db.collection('tasks').updateMany(
    //     { completed: false },
    //     { $set: { completed: true } })
    //   .then((result) => { console.log(result.modifiedCount)})
    //   .catch((error) => { console.log(error) })

    // db.collection('users').deleteMany({
    //     age: 31
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Clean the house'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})