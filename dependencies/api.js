const express = require('express')
const app = express()

const creators = {
  '1': {
    id: 1,
    name: 'Brad Pitt',
    image: '',
    tags: ['calisthenics', 'strength']

  },
  '2': {
    id: 2,
    name: 'Meryl Streep',
    image: '',
    tags: ['yoga', 'mobility']
  },
  '3': {
    id: 3,
    name: 'Leonardo DiCaprio',
    image: '',
    tags: ['lean', 'endurance']
  },
  '4': {
    id: 4,
    name: 'Matt Damon',
    image: '',
    tags: undefined,
  }
}

app.get('/:creatorId', (req, res) => {
  const creator = creators[req.params.creatorId];
  return creator ? res.json(creator) : res.status(404).send();
})

app.listen(3000)
