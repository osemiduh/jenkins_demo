const express = require("express")
const app = express()

const PORT = process.env.PORT || 4000 


app.get('/', (req, res)=>{
    res.status(200).send('Hello from Jenkins')
})


app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})