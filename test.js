const express = require('express')
const app = express()
app.use(express.static('public'))
// GET /foo
app.post('/foo', (req, res) => {
  console.log(req.body)
  res.send('Done')
})
// Start Listenings
app.listen(3000, () => console.log('Listening on http://localhost:3000/...'))
