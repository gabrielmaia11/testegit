const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.status(200).send({mesage: 'Ola mundo'});
})

app.listen(3001, () => {

   app.get('/ola', (req,res)=>{
    res.status(200).send({mesage: 'Oi eu sou a rota ola'});
}) 

    console.log('Api rodando na porta 3001');
})
