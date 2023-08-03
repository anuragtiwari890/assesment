const express = require('express')
const cors = require('cors')
const redis = require('./src/utils/redis');
const TasksService = require("./src/services/tasks/task-service")

const app = express()

app.use(express.json());
app.use(cors())

redis.initRedis();

app.get('/', async function (req, res) {
    const tasks = await TasksService.getTasks();
    res.send(tasks)
})

app.get('/:name', async function(req, res) {
    const task = await TasksService.getTask(req.params.name)
    res.send(task);
  });

app.post('/', async function (req, res) {
    const tasks = await TasksService.saveTask(req.body);
    res.send(tasks)
});

app.listen(3001)
