const {createBooksHandler} = require('./handler')

const routes = [
    {
        method: 'GET',
        path:'/',
        handler: ()=> {
            return 'Homepage'
        }
    },
    {
        method:'*',
        path:'/',
        handler: () => {
            return 'not found'
        }
    },
    {
        method:'POST',
        path:'/books',
        handler: createBooksHandler
    }
]

module.exports = routes