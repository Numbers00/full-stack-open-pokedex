const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (_req, res) => {
  res.send('5')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
})
