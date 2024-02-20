const express = require('express')
const app = express()
const port = 80


require('dotenv').config()
console.log(process.env.S3_BUCKET) // remove this after you've confirmed it is working

app.get('/', function (req, res) {
  res.json({
    "hey":"Node js"
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })