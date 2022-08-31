const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'nodejs_course';

async function connect() {
    // Use connect method to connect to the server
    await client.connect();
    const db = await client.db(dbName);
    
    return db;
}

module.exports = connect;