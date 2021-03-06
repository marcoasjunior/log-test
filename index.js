const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.post('/log', (req, res) => {

    console.log(req.body)

    res.sendStatus(200)

})

app.listen(port, () => {
  console.log(`App http://localhost:${port}`)
})