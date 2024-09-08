import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { createUser, findUserByUsername, findAllUsers } from '../models/User';

const router = Router();

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await createUser(username, hashedPassword);
        res.status(201).send('User created');
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        var msn:any=req.session
        msn.userId = user.id;
       
        res.send('Logged in');
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

router.get('/users', async (req, res) => {
    try {
        const users = await findAllUsers();
        res.send(users.map(user => ({ username: user.username })));
    } catch (error:any) {
        res.status(400).send(error.message);
    }
});

export default router;
