
const BASE_URL = 'http://localhost:3001'


const TaskAPI = {
    getAllTasks: async function() {
        console.log("Here")
        const result = await fetch(BASE_URL);
        console.log("Her3", result)
        return result.json();
    },

    getTask: async function(name) {
        const result = await fetch(`${BASE_URL}/${name}`);
    },

    saveTask: async function(Task) {
        // const result = await fetch(BASE_URL);
    }
}

export {TaskAPI}