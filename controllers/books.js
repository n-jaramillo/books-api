// Dependencies
const books = require('express').Router()
const Book = require('../models/book')

// Seed Books
books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
    },
    {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
    },
    {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
    },
    {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


// Books Index
books.get('/', (req, res) => {
    Book.find()
        .then(foundBooks => {
            res.status(200).json(foundBooks)
        })
        .catch(err => {
            res.status(400).json({ message: 'could not find books', err })
        })
})

// Show Book
books.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(foundBook => {
            res.status(200).json(foundBook)
        })
        .catch(err => {
            res.status(400).json({ message: 'could not find book', err })
        })
})

// Update Book
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedBook => {
            res.status(200).json(updatedBook)
        })
        .catch(err => {
            res.status(400).json({ message: 'could not update book', err })
        })
})

// Delete Book
books.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id)
        .then(() => {
            res.status(200).json({ message: 'deleted book' })
        })
        .catch(err => {
            res.status(400).json({ message: 'could not delete book', err })
        })
})

// Add Book
books.post('/', (req, res) => {
    Book.create(req.body)
        .then((newBook) => {
            res.status(200).json(newBook)
        })
        .catch(err => {
            res.status(400).json({message: 'could not create book', err})
        })
})

// Exports
module.exports = books