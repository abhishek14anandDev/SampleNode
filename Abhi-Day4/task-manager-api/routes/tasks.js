const express = require('express')

const router = express.Router()

router.get('/',(req,res)=>res.send('Get Route running'))
router.post('/',(req,res)=>res.send('Post Route running'))
router.delete('/:id',(req,res)=>res.send('Delete route running'))
router.put('/:id',(req,res)=>res.send('put route running'))
router.patch('/:id/complete',(req,res)=>res.send('patch route running'))

module.exports = router
