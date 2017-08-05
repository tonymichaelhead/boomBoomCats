const express = require('express')
const path = require('path')
const parser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, function() {
  console.log('now serving app on port ', PORT)
})