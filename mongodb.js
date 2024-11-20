// CRUD create read update delete
const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL)

async function main() {
    const db = client.db(databaseName)
        // await db.collection('users').find({ name: "Jon" }).toArray()
        //         .then((result, error) => {
        //             if (error) {
        //                 return console.log('Failed to fetch')
        //             }
        //             console.log(result)
        //         })
        // await db.collection('tasks')
        //     .findOne({ _id: new ObjectId('67376b8d7ab2fd3c85c4402a')}) 
        //     .then ((result, error) => {
        //         if (error) {
        //             return console.log('Unable to fetch')
        //         }
        //         console.log(result)
        //     }) 

        // await db.collection('tasks')
        //     .find({ completed: true })
        //     .toArray()
        //     .then ((result, error) => {
        //         if (error) {
        //             return console.log('Unable to fetch')
        //         }
        //         console.log(result)
        //     })

        // await db.collection('users').updateOne({
        //     _id: new ObjectId('673770b245189b4c94c04452')
        // }, {
        //     $inc: {
        //         age: -34
        //     }
        // })

        // await db.collection('tasks')
        // .updateMany({completed: false}, {
        //     $set: {
        //         completed: true
        //     }
        // }).then ((result) => {
        //     console.log(result.modifiedCount)
        // }).catch((error) => {
        //     console.log(error)
        // })

        // await db.collection('users').deleteMany({
        //     age: 8
        // }).then((result) => {
        //     console.log(result)
        // }).catch((error) => {
        //     console.log(error)
        // })

        await db.collection('tasks').deleteOne({
           description: 'ToDo 3' 
        }).then((result) => {
            console.log(result)
        }).catch((error) => {
            console.log(error)
        })

}
        
main()
    .catch(console.error)
    .finally(() => client.close()) 