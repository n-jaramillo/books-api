// Dependencies
require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

// Mongoose
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// Middleware
app.use(express.json())
app.use(cors())

// Index
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Books
app.use('/books', require('./controllers/books'))

// Listen
app.listen(process.env.PORT)