const express = require('express')
const app = express()
const port = 80


app.get('/', function (req, res) {
  res.json({
    "hey":"Node js"
  })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })