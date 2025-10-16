/* express.cjs */
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

var candies = [
    {name: "Duna Kavics", mass: "100g", origin: "HU"},
    {name: "Francia Drazsé", mass: "120g", origin: "HU"},
    {name: "Negro", mass: "80g", origin: "HU"},
    {name: "Isla", mass: "60g", origin: "FR"},
]

app.get('/candies', (req, res)=>{
    res.status(200).json(candies)
})

app.post('/candy', (req, res)=>{
    const {name, mass, origin} = req.body
    candies.push({name, mass, origin})
    res.status(201).json(candies)
})

app.delete('/candies', (req, res)=>{
    candies = []
    res.sendStatus(200)
})

// Export the app for testing
module.exports = app

// Only start server if this is the main module (not when testing)
if (require.main === module) {
  app.listen(3000, () => console.log('backend runs'))
}