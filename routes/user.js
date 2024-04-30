// const express = require('express');
// const users = require('../models/User.js');
import express from 'express';
import { users } from '../models/User.js';

const router = express.Router();

router.get('/', (req, res) => {
    const user = users.find(u => u.username === req.username);
    res.json({
        username: user.username,
        name: user.name
    });
})

// module.exports = router;
export default router;
