const express = require('express')
const user = require('./user')
const app = express()

const router = express.Router();

router.use('/user', user)


module.exports = router;