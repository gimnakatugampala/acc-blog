// blog_index , blog_create , blog_details , blog_destroy_post , blog_details_post
const Blog = require('../models/blog')

const blog_index = (req,res) =>{  
    Blog.find().sort({createdAt: -1})
    .then((result) =>{
        res.render('index',{title:'Welcome to ACC',blogs:result})
    })
    .catch(err =>{
        console.log(err)
    })
}

const blog_create = (req,res) =>{
    res.render('create',{title:'Create New Blog'})
}


const blog_details = (req,res) =>{
    const id  = req.params.id
    Blog.findById(id)
    .then((result) => {
        res.render('details',{title:'details',blog:result})
    })
    .catch(err =>{
        console.log(err)
    })
}

const blog_details_post = (req,res) =>{
    const blog = new Blog({
        email:req.body.email,
        title:req.body.title,
        body:req.body.msg
    })

    blog.save()
    .then((result) =>{
        res.redirect('/blogs')
    })
    .catch(err =>{
        console.log(err)
    })
    console.log(req.body)
}

const blog_destroy_post = (req,res) =>{
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then(result =>{
            res.json({ redirect: '/blogs' })
        })
        .catch(err =>  console.log(err))
}

module.exports = {
    blog_index,
    blog_create,
    blog_details,
    blog_details_post,
    blog_destroy_post
}