const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.json({ ok: true })
})

module.exports = app
