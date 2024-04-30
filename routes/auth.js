// const express = require('express');
// const users = require('../models/User.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

import express from 'express';
import { users } from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();
const SECRET_KEY = 'qwerty1234';

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = users.find(u => u.username === username);

        if (user == undefined) {
            return res.status(401).json({ error: 'Auth failed!'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Auth failed!'});
        }

        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '5s' });
        return res.json({ token: token, expiresIn: 3600 });
    } catch {
        return res.status(500).json({ error: 'Login failed!' });
    }
});

// module.exports = router;
export default router;
