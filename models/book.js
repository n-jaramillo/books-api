// Dependencies
const mongoose = require('mongoose')
const { Schema } = mongoose

// Schema
const bookSchema = new Schema({
    title: String,
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// Model
const Book = mongoose.model('Book', bookSchema)

// Exports
module.exports = Book