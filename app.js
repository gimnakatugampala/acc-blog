const express = require('express');
const mongoose = require('mongoose');
// const Blog = require('./models/blog')
const blogRouter = require('./router/blogRouter')

const app = express();

// Connect to db
const dbURI = 'mongodb+srv://Gimna:9922557gimna@nodetuts.qlhc3.mongodb.net/acc-blogs?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => app.listen(3000))
.catch(err => console.log(err))

// register view engine
app.set('view engine','ejs')


app.use(express.static('public'))
app.use(express.urlencoded({extended :true}));

// Home
app.get('/',(req,res) =>{
    res.redirect('/blogs')
})

app.use(blogRouter)

// About
app.get('/about',(req,res) =>{
    res.render('about',{title:'About ACC'})
})


app.use((req,res) =>{
    res.status(404).render('404',{title:'Page Not Found'})
})
