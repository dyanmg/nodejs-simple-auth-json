import express, { json, static as _static } from 'express';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import authMiddleware from './middlewares/auth.js';

const app = express();
const PORT = 3000;

app.use(json());
app.use('/api/auth', authRoute);
app.use('/api/user', authMiddleware, userRoute);
app.use(_static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

