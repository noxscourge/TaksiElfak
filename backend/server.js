
const express = require('express')
const vozaci =  require('./data/vozaciPodaci')
const app = express()


app.get('/',(req,res) => 
{
    res.send('Api is running...')
})


app.get('/api/vozaci',(req,res) => 
{
    res.json(vozaci)
})


app.get('/api/vozaci/:id',(req,res)=> 
{
    const vozac = vozaci.find((v)=>v._id===req.params.id)
    res.json(vozac)
})


app.listen(5000,console.log("Server je pokrenut na port 5000"))
