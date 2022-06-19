var express = require('express')
var router = express.Router()
const Category = require('../models/category')

router.get('/', function(req, res, next) {
  res.send('Called root api')
}) 

//Post Method
router.post('/post', async (req, res) => {
  // console.log('req', req.body)
  const data = new Category({
    title: req.body.title,
    link: req.body.link,
    image: req.body.image,
    description: req.body.description,
  })

  try {
    const dataToSave = await data.save()
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error.message})
  }
})

//Get all Method
router.get('/getAll', async (req, res) => {
  try{
    const data = await Category.find()
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
  try{
    const data = await Category.findById(req.params.id)
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const options = { new: true }

    const result = await Category.findByIdAndUpdate(
      id,
      updatedData,
      options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await Model.findByIdAndDelete(id)
    res.send(`Document with ${data.name} has been deleted..`)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
