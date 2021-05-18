const mongoose = require('mongoose')
const Schema = mongoose.Schema

const blogScheme = new Schema({
    email:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
},{ timestamp:true })

const Blog = mongoose.model('Blog',blogScheme)
module.exports = Blog;