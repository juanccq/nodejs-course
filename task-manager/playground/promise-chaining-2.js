require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('66400c1c4ffcb8d1fb9e468f').then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

const deleteTaskAndcount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndcount('66400c1c4ffcb8d1fb9e468f').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})