const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
.then (db => console.log('Database MongoDB connected', db.connection.name))
.catch(error => console.log(error))

module.exports= mongoose
