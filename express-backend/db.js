const mongoClient = require('mongodb').MongoClient;
const mongoURL = process.env.DB_ADDRESS + "/mern-containerization";

function insertTest() {
    mongoClient.connect(mongoURL, {useNewUrlParser: true}, async function (err, client) { // Connect to database
        // Send error message if error occurs
        if (err) console.log("ERROR: " + err);
        else {
            // Check is username is taken
            let db = client.db('mern-containerization');
            // If data is correct add new user document to users collection
            db.collection('test').insertOne({
                "test-key": "Test Value",
                "unique-value": Math.random()
            }, async function (err, res) {
                if (err) { // Send error message if error occurs
                    client.close();
                    console.log("ERROR: " + err);
                } else {
                    client.close();
                    console.log("Insertion successful")
                }
            });
        }
    });
}

function findTest() {
    mongoClient.connect(mongoURL, {useNewUrlParser: true}, async function (err, client) { // Connect to database
        // Send error message if error occurs
        if (err) console.log("ERROR: " + err);
        else {
            // Check is username is taken
            let db = client.db('mern-containerization');
            // If data is correct add new user document to users collection
            db.collection('test').find({}).toArray(async function (err, res) {
                if (err) { // Send error message if error occurs
                    client.close();
                    console.log("ERROR: " + err);
                } else {
                    client.close();
                    console.log("Find successful");
                    console.log(res);
                }
            });
        }
    });
}

module.exports = {
    insertTest,
    findTest
}