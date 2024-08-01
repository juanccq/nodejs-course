const {MongoClient, ObjectId} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }   

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Juan',
    //     age: 41
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //     console.log(result);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Pedro',
    //         age: 32
    //     },
    //     {
    //         name: 'Maria',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(result);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Task 1',
    //         completed: true
    //     },
    //     {
    //         description: 'Task 2',
    //         completed: false
    //     },
    //     {
    //         description: 'Task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents');
    //     }
    //     console.log(result);
    // })

    // db.collection('users').findOne({ name: 'Juan' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').findOne({ _id: new ObjectId('6632dc79763006c515a2b24a') }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({ age: 41 }).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({ age: 41 }).count((error, count) => {
    //     console.log(count);
    // });

    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectId('6632dc79763006c515a2b24a')
    // }, {
    //     // $set: {
    //     //     name: 'Carlos'
    //     // }
    //     $inc: { 
    //         age: 1
    //     }
    // });

    // updatePromise.then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('users').deleteMany({
    //     age: 41
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    db.collection('tasks').deleteOne({
        description: 'Task 1'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })
})