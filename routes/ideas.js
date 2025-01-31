const express = require('express')
const router = express.Router()

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
]

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: ideas
  })
})

router.get('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: 'Resource not found'
    })
  }
  
  res.json({
    success: true,
    data: idea
  })
})

router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10)
  }
  console.log(idea)

  res.send(req.body.text)
})


module.exports = router