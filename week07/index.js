const express = require('express')
const app = express()
    const port = 80             // part 80 is sed for the http protocol 

app.get('/', (req,res) => {
    res.send('HELLO WORLD!!!')
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
