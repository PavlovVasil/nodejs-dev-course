require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e2f53ba1ea3ef197417875a')
//     .then(task => Task.countDocuments({completed: false}))
//     .then(result => console.log(result))
//     .catch(e => console.log(e));

const deleteTaskAndCound = async id => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count
};

deleteTaskAndCound('5e2f53ba1ea3ef197417875a')
    .then(result => console.log(result))
    .catch(e => console.log(e));