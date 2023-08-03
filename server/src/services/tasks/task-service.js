let tasksRepo = require("./repository")


async function getTasks() {
    return await tasksRepo.getTasks()
}

async function getTask(name) {
    return await tasksRepo.getTask(name);
}

async function saveTask(task) {
    return await tasksRepo.saveTask(task);
}

module.exports = {
    getTasks,
    getTask,
    saveTask,
}