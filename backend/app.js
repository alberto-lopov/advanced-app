import express from 'express';
const app = express();
const port = 300;

app.get('/', (req, res) => {
    res.json({user: "hola"});
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})