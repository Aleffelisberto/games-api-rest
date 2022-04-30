const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const JWT_KEY = 'aI9#0F89%$9F0@-2DSF#$1373#Ssd'

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// middleware
const auth = (req, res, next) => {
  let authToken = req.headers['authorization']
  if (authToken !== undefined) {
    authToken = authToken.replace('Bearer ', '')
    jwt.verify(authToken, JWT_KEY, (err, data) => {
      if (err) {
        res.status(401)
        res.json({ err: 'Token inválido' })
      } else {
        req.token = authToken
        req.loggedUser = { id: data.id, email: data.email }
        next()
      }
    })
  } else {
    res.status(401)
    res.json({ error: 'Você enviou o token ?' })
  }
}

// mocky database
let DB = {
  games: [
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
  ],
  users: [
    { id: 1, email: 'sandrinfc@lubmail.com', password: 'sandrinfc' },
    { id: 2, email: 'durabolinFC@duramail.com', password: 'durateston' }
  ]
}

// return all games
app.get('/games', auth, (req, res) => {
  res.statusCode = 202
  res.json({
    user: req.loggedUser,
    games: DB.games
  })
})

// return a specified game by its id
app.get('/game/:id', auth, (req, res) => {
  const { id } = req.params
  if (!isNaN(id)) {
    const result = DB.games.filter(game => game.id === parseInt(id))
    console.log(result)
    if (result.length > 0) {
      res.statusCode = 202
      res.json({
        user: req.loggedUser,
        game: result
      })
    } else {
      res.sendStatus(404)
    }
  } else {
    res.sendStatus(400)
  }

  res.statusCode
})

// create a game
app.post('/game', auth, (req, res) => {
  const { title, year, price } = req.body

  if (title === undefined || year === undefined || price === undefined) {
    res.sendStatus(400)
  } else {
    const id = DB.games[games.length - 1].id + 1
    games.push({
      id,
      title,
      year,
      price
    })
    res.sendStatus(202)
  }
})

app.post('/auth', auth, (req, res) => {
  const { email, password } = req.body

  if (email != undefined) {
    const user = DB.users.find(user => user.email === email)
    if (user !== undefined) {
      if (password === user.password) {
        //payload
        const token = jwt.sign({ id: user.id, email: user.email }, JWT_KEY, {
          expiresIn: '48h'
        })
        res.status(200)
        res.json({ token: token })
      }
    } else {
      res.status(404)
      res.json({ password: 'senha inválida' })
    }
  } else {
    res.status(400)
    res.send({ error: 'O email enviado é inválido' })
  }
})

// delete a game
app.delete('/game/:id', auth, (req, res) => {
  const { id } = req.params

  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    const gameIndex = DB.games.findIndex(element => element.id === parseInt(id))
    if (id === -1) res.sendStatus(404)
    else {
      games.splice(gameIndex)
      res.sendStatus(202)
    }
  }
})

// edit a game info
app.put('/game/:id', auth, (req, res) => {
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
    const game = DB.games.find(game => game.id === parseInt(id))

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
