const express = require('express')
const app = express()

const creators = {
  '1': {
    id: 1,
    name: 'Brad Pitt',
    avatar: 'https://placehold.co/150/f08/bba/png',
    tags: ['calisthenics', 'strength']

  },
  '2': {
    id: 2,
    name: 'Meryl Streep',
    avatar: 'https://placehold.co/150/dd0/0bf/png',
    tags: ['yoga', 'mobility']
  },
  '3': {
    id: 3,
    name: 'Leonardo DiCaprio',
    avatar: 'https://placehold.co/150/def/abc/png',
    tags: ['lean', 'endurance']
  },
  '4': {
    id: 4,
    name: 'Matt Damon',
    avatar: 'https://placehold.co/150',
    tags: undefined,
  }
}

app.get('/track-query', async (req, res) => {
  await new Promise(r => setTimeout(r, 3000));
  console.log('tracked')
  return res.json('tracked');
});

app.get('/creators/:creatorId', (req, res) => {
  const creator = creators[req.params.creatorId];
  return creator ? res.json(creator) : res.status(404).send();
});


app.listen(3000)
