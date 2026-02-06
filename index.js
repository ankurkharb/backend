const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hell World!')
})

app.get('/twitter', (req, res) => {
    res.send('ankurcom')
})
app.get('/login', (req,res)=>{
    res.send('<h1>Login at my dihh</h1>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
