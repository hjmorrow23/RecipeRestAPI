const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server')

const mongod = new MongoMemoryServer();

//connect to the db
module.exports.connect = async () => {
    const uri = await mongod.getUri();
    const mongooseOpts = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    await mongod.connect(uri, mongooseOpts);
}

//disconnect and close connection
module.exports.closeDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

//clear the db remove all data
module.exports.clearDatabase = async () => {
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}