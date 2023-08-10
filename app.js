const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  // throw 'error...'
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send('9')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
})
