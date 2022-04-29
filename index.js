const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mocky database
let games = [
  {
    id: 1,
    title: 'Sea of Thieves',
    year: 2018,
    price: 159.9
  },
  {
    id: 2,
    title: 'Assassins Creed II',
    year: 2009,
    price: 39.9
  },
  {
    id: 3,
    title: 'Resident Evil 6',
    year: 2012,
    price: 59.9
  },
  {
    id: 4,
    title: 'Pes 2022',
    year: 2022,
    price: 199.9
  },
  {
    id: 5,
    title: 'Red Dead Redemption',
    year: 2018,
    price: 149.9
  }
]

// return all games
app.get('/games', (req, res) => {
  res.statusCode = 202
  res.json(games)
})

// return a specified game by its id
app.get('/game/:id', (req, res) => {
  const { id } = req.params
  if (!isNaN(id)) {
    const result = games.filter(game => game.id === parseInt(id))
    console.log(result)
    if (result.length > 0) {
      res.statusCode = 202
      res.json(result)
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(400)
  }

  res.statusCode
})

// create a game
app.post('/game', (req, res) => {
  const { title, year, price } = req.body

  if (title === undefined || year === undefined || price === undefined) {
    res.sendStatus(400)
  } else {
    const id = games[games.length - 1].id + 1
    games.push({
      id,
      title,
      year,
      price
    })
    res.sendStatus(202)
  }
})

// delete a game
app.delete('/game/:id', (req, res) => {
  const { id } = req.params

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    const gameIndex = games.findIndex(element => element.id === parseInt(id))
    if (id === -1) res.sendStatus(404)
    else {
      games.splice(gameIndex)
      res.sendStatus(202)
    }
  }
})

// edit a game info
app.put('/game/:id', (req, res) => {
  const { id } = req.params
  const { title, year, price } = req.body

  const isInvalid = !(
    !!title ||
    !!year ||
    !!price ||
    isNaN(price) ||
    isNaN(yaer) ||
    isNaN(id)
  )

  if (isInvalid) {
    res.sendStatus(400)
  } else {
    const game = games.find(game => game.id === parseInt(id))

    if (game) {
      game.year = year
      game.title = title
      game.price = price
    } else {
      res.sendStatus(404)
    }
  }
})

app.listen(3000, err => {
  if (err) console.err(err)
  else console.log('App is running...')
})
