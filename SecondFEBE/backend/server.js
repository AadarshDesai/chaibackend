require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Server is ready");
})

// Get a list of 5 jokes

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'This is a joke'
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'This is another joke'
        },
        {
            id: 3,
            title: 'And another joke',
            content: 'This is and another joke'
        },
        {
            id: 4,
            title: 'Yet another joke',
            content: 'This is yet another joke'
        },
        {
            id: 5,
            title: 'Fifth joke',
            content: 'This is a fifth joke'
        }
    ];
    res.send(jokes);
})

app.listen(port, ()=> {
    console.log(`App is running on port: ${port}`)
})