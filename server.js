const express = require('express')
const port = 5001

const app = express()

const ideas = [
  {
    id: 1,
    text: 'Develop an AI-driven chatbot for customer support.',
    tag: 'AI',
    username: 'MaxMac831',
    date: '2025-01-14'
  },
  {
    id: 2,
    text: 'Create a responsive portfolio website using React.',
    tag: 'Frontend',
    username: 'Leonardo21',
    date: '2025-01-09'
  },
  {
    id: 3,
    text: 'Build a RESTful API for an e-commerce platform.',
    tag: 'Backend',
    username: 'TalGal_X2',
    date: '2024-01-28'
  },
  {
    id: 4,
    text: 'Design a smart home system controlled via mobile app.',
    tag: 'Internet of Things',
    username: 'Nimiratech',
    date: '2025-01-29'
  },
  {
    id: 5,
    text: 'Implement user authentication and authorisation using Clerk.',
    tag: 'Backend',
    username: 'GemmaAI2007',
    date: '2025-01-14'
  }
];




app.get('/', (req, res) => {
  res.send('Elano Random Ideas Application')
})

app.listen(port, () => {
  console.log(`Server listening on Port ${port}`)
})