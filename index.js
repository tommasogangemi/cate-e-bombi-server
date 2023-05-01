const express = require('express')
const dotenv = require('dotenv')
const token = require('./routes/token')

dotenv.config()

const app = express()
const port = 5000

app.use('/token', token)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`)
})
