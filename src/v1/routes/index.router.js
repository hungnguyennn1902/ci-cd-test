const express = require('express');
const router = express.Router();

router.get('/checkstatus', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'api ok'
    })
})

router.get('/api/welcome', (req, res, next) => {
    res.status(200).json({
        status: 'success',
        message: 'welcome to WSV api'
    })
})

module.exports = router;