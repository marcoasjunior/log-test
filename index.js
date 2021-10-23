const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.post('/log', (req, res) => {

    console.log(req.body)

    res.sendStatus(200)

})

app.listen(port, () => {
  console.log(`App http://localhost:${port}`)
})