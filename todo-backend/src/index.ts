import express from 'express';
import cors from 'cors';
import session from 'express-session';
import userRoutes from './routes/userRoutes';
import todoRoutes from './routes/todoRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:8081', 
    credentials: true,
}));
app.use(express.json());
app.use(session({
    secret: 'secret key',
    resave: false,
    saveUninitialized: false, 
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
