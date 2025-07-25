import { Router } from 'express';
import { login, register } from '../controllers/loginController';

export default Router()
    .post('/', login)
    .post('/register', register);