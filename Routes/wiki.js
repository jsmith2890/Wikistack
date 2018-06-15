const express = require('express');
const router = express.Router();
const { db } = require('../models');
const bodyParser = require('body-parser');
const addPage= require('../views/addpage')

router.get('/', async (req, res, next) => {
 try {
  const data =   await db.query(Pages.findAll());

  res.send(data)
 } catch (error) {
   next(error)
 }
 

});



router.post('/', async (req, res, next) => {
  try {
    const title = req.body.title
    const slug = req.body.slug
    const content = req.body.content
    
    const submission  =  await db.query(Page.create({
      title,
      slug,
      content
    }))
  } catch (error) {
    next(error)
  }
  
 });


 router.get('/add', (req,res,next) =>{
 res.send(addPage())
 })

module.exports = router;
