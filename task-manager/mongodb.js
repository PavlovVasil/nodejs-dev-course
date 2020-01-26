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

    db.collection('users').insertOne({
        _id: id,
        name: 'George',
        age: 31
    }, (error, result) => {
        if (error) {
            return console.log('Unable to insert user')
        }

        console.log(result.ops)
    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'John',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) { return console.log(result) }

    //     console.log(result.ops)
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Pot plants',
    //         completed: false
    //     }        
    // ], (error, result) => {
    //     if (error) { return console.log('Unable to insert tasks') };

    //     console.log(result.ops)
    // })
})