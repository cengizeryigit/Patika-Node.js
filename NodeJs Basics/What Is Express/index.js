const express = require('express')
const app = express()

app.get('/', (req,res) =>{
    res.status(200).send('Hello World')
})

app.get('/about', (req,res) =>{
    res.status(200).send('About Sayfası')
})

app.get('/contact', (req,res) =>{
    res.status(200).send('Contact Sayfası')
})

app.get('*', (req,res) =>{
    res.status(404).send('404 Sayfa Bulunamadı')
})
const port = 3000;
app.listen(port, ()=>{
    console.log(`Sunucu port ${port} da çalışmaya başladı...`)
})