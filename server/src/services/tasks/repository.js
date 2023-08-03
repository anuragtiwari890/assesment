const redis = require('../../utils/redis');

let Tasks = [
    {name: "Meeting1", description: "meeting for scale"},
    {name: "Meeting2", description: "meeting for scale2"},
];

const TaskRepository = {
    getRedisClient: function() {
        return redis.getClient();
    },
    getTasks: async function ()  {
        const res = await this.getRedisClient().hVals(`task`);
        return res.map(task => JSON.parse(task));
    },

    getTask: async function(name)  {
        return TasksTasks.filter(task => task.name === name);
    },

    saveTask: async function (task) {
        this.getRedisClient().hSet(`task`, task.name, task);
        return task;
        // Tasks.push(task);
    }
}

module.exports = TaskRepository;