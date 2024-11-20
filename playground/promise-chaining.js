require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('673b8e811061b0cd2f93c67c', {age: 1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age:1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const task = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('673b8e811061b0cd2f93c67c', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})