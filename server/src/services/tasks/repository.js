const redis = require('../../utils/redis');

let Tasks = [
    {name: "Meeting1", description: "meeting for scale"},
    {name: "Meeting2", description: "meeting for scale2"},
];

const TaskRepository = {
    // init: function () {
    //     getRedisClient().set('Meeting1', {name: "Meeting1", description: "meeting for scale"});
    //     getRedisClient().set('Meeting1', {name: "Meeting1", description: "meeting for scale"});
    // },

    getRedisClient: function() {
        return redis.getClient();
    },
    getTasks: async function ()  {
        const keys = await this.getRedisClient().sendCommand(["keys","*"]);
        console.log(keys);
        let tasks = [];
        for(let i = 0; i < keys.length; i++) {
            tasks.push(JSON.parse(await this.getRedisClient().get(keys[i])));
        }

        return tasks;
    },

    getTask: async function(name)  {
        return TasksTasks.filter(task => task.name === name);
    },

    saveTask: async function (task) {
        this.getRedisClient().set(task.name, JSON.stringify(task));
        return task;
        // Tasks.push(task);
    }
}

module.exports = TaskRepository;