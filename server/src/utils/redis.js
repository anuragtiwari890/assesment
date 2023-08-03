
const {createClient} = require('redis');

let redClient;

async function initRedis() {
    redClient = createClient();
    redClient.on('error', err => console.log('Redis Client Error', err));
    console.log("REdis started");
    await redClient.connect();
}

async function disconnect() {
    await redClient.disconnect();
}

function getClient() {
    return redClient;
}


module.exports = {
    initRedis,
    disconnect,
    getClient
}


// await client.set('key', 'value');
// const value = await client.get('key');
