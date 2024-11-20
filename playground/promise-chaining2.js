require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('673b584decb21c8c706af534').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id,completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed})
    return {task, count}
}

deleteTaskAndCount('673b5a2adfc3ccc026eea065',false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})