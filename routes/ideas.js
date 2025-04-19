const express = require('express')
const router = express.Router()
const Idea = require('../models/Idea')

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
  },
  {
    id: 6,
    text: 'Create a machine learning model to predict house prices.',
    tag: 'Machine Learning',
    username: 'DataSciPro',
    date: '2024-12-21'
  },
  {
    id: 7,
    text: 'Develop a personal finance management app.',
    tag: 'Mobile App',
    username: 'AppDevGuru',
    date: '2025-02-01'
  },
  {
    id: 8,
    text: 'Build a weather forecasting website using APIs.',
    tag: 'APIs',
    username: 'WeatherWiz',
    date: '2024-12-15'
  },
  {
    id: 9,
    text: 'Create a Python script for web scraping.',
    tag: 'Python',
    username: 'CodeNinja123',
    date: '2025-01-05'
  },
  {
    id: 10,
    text: 'Develop a real-time chat application using Socket.io.',
    tag: 'WebSocket',
    username: 'MaxMac831',
    date: '2025-01-22'
  },
  {
    id: 11,
    text: 'Build a recommendation system for movies.',
    tag: 'Machine Learning',
    username: 'MovieBuff101',
    date: '2025-01-12'
  },
  {
    id: 12,
    text: 'Create a dashboard for visualising sales data.',
    tag: 'Data Visualisation',
    username: 'VizExpert',
    date: '2024-12-29'
  },
  {
    id: 13,
    text: 'Develop a social media analytics tool.',
    tag: 'Analytics',
    username: 'SocialSavvy',
    date: '2025-01-02'
  },
  {
    id: 14,
    text: 'Build a voice-controlled virtual assistant.',
    tag: 'AI',
    username: 'VoiceMaster',
    date: '2024-12-31'
  },
  {
    id: 15,
    text: 'Create a blog platform with user authentication.',
    tag: 'Full Stack',
    username: 'BlogBuilder',
    date: '2025-01-08'
  },
  {
    id: 16,
    text: 'Design a real-time stock market tracker.',
    tag: 'Finance',
    username: 'MarketGuru',
    date: '2024-12-27'
  },
  {
    id: 17,
    text: 'Develop a quiz application using JavaScript.',
    tag: 'JavaScript',
    username: 'QuizMaster',
    date: '2025-01-10'
  },
  {
    id: 18,
    text: 'Build a sentiment analysis tool for tweets.',
    tag: 'NLP',
    username: 'TalGal_X2',
    date: '2025-01-19'
  },
  {
    id: 19,
    text: 'Create a travel itinerary planner app.',
    tag: 'Mobile App',
    username: 'TravelPro',
    date: '2025-01-25'
  },
  {
    id: 20,
    text: 'Develop a job board website with search and filter features.',
    tag: 'Web Development',
    username: 'CodeNinja123',
    date: '2025-01-17'
  }
];

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find()
    res.json({
    success: true,
    data: ideas
  })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false, 
      error: 'Something went wrong.'
    })
  }
})

router.get('/:id', (req, res) => {
  const idea = ideas.find(
    (idea) =>
      idea.id === +req.params.id
  )

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

router.post('/', async (req, res) => {
  const idea = new Idea ({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  })
  try {
    const savedIdea = await idea.save()
    res.json({
    success: true,
    data: savedIdea
  })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      error: 'Something went wrong'
    })
  }
})

router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: 'Resource not found'
    })
  }
  
  idea.text = req.body.text || idea.text
  idea.tag = req.body.tag || idea.tag

  res.json({
    success: true,
    data: idea
  })
})

router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id)

  if (!idea) {
    return res.status(404).json({
      success: false,
      error: 'Resource not found'
    })
  }

  const index = ideas.indexOf(idea)
  ideas.splice(index, 1)
  res.json({
    success: true,
    data: {}
  })
})

module.exports = router