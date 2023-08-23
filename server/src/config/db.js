const mongoose = require('mongoose');

// Connect to the MongoDB database
const Connect = () => {
    mongoose.connect(process.env.DB || "mongodb://localhost/blog", {
        useNewUrlParser: true,
    })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
        });

}


module.exports = Connect