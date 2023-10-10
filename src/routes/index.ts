import express from 'express';
import { registerUser } from '../controllers/Users/registerUser.ts';
import { getUser } from '../controllers/Users/getUser.ts';

const router = express.Router();

router.get('/',  getUser);
router.put('/login', registerUser)


export default router;