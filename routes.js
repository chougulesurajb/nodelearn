const express = require('express')
const todoservices = require('./todoservices')
const app = express()

const router = express.Router();

router.use('/todoservices', todoservices)


module.exports = router;