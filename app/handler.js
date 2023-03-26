const bookshelf = require('./bookshelf')
const { nanoid } = require('nanoid')

const createBooksHandler = async (request, h) => {  
    const {
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
    } = request.payload

    const id = nanoid(16)

    const isFinished = (readPage, pageCount)=>{
    if(readPage === pageCount) {
        return true
    }
    if(readPage < pageCount) {
        return false
    }}

    const finished = isFinished(readPage, pageCount)

    const insertedAt = new Date().toISOString()
    const updatedAt = insertedAt

    const newBook = {
        id,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        reading,
        insertedAt,
        updatedAt
    }
    bookshelf.push(newBook)

    const isSucess = bookshelf.filter((book) => book.id === id).length > 0

    if(isSucess){
        const res = h.response({
            status:'success',
            message:'success add new book',
            data: {
                bookId: id
            }
        })
        res.code(201)
        return res
    }
    const res = h.response({
        status:'error',
        message:'failed to add new book'
    })
    res.code(500)
    return res
    
}

module.exports = {
    createBooksHandler
}
