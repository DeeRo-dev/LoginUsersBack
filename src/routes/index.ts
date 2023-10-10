import express from 'express';
import { registerUsers } from '../controllers/Users/registerUser';

const router = express.Router();

router.get('/login', registerUsers)


export default router;