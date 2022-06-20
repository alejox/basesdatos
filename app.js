const express = require('express');

const users = [
    { id: 1, name: 'Max' },
    { id: 2, name: 'Alejo' },
    { id: 3, name: 'Juan' }
]

const posts = [
    { id: 1, title: 'Post #1' },
    { id: 2, title: 'Post #2' },
    { id: 3, title: 'Post #3' }
]
// init express app
const app = express();

app.use(express.json())

app.get('/users','/posts', (req, res) => {

    res.status(200).json({
        status: 'success',
        users,
        posts
    });
});

app.post('/users', '/posts', (req, res) =>{
    const {name} = req.body;
    const {title} = req.body;

    const newUser = {
        id: Math.floor(Math.random() * 1000),
        name
    }
    
    users.push(newUser);

    const newPost = {
        id:Math.floor(Math.random() * 1000),
        title
    }

    posts.push(newPost);

    res.status(201).json({
        status:'success',
        newUser,
        newPost
    })
});

app.listen(4000, () => {
    console.log('Express app runingn!');
});
