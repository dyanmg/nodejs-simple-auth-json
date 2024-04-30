// const bcrypt = require('bcrypt');
import bcrypt from 'bcrypt';

export const users = [
    { username: 'dyanmg', name: 'Gufron', password: bcrypt.hashSync('admin1234', 10) },
    { username: 'satria', name: 'Satria', password: bcrypt.hashSync('1234', 10) },
    { username: 'admin', name: 'Admin', password: bcrypt.hashSync('1234', 10) },
];

// module.exports = users;