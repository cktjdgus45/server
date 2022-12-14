import jwt from 'jsonwebtoken';
import bcrypt, { hash } from 'bcrypt';
import { } from 'express-async-errors';
import * as userRepository from '../data/auth.js';

const jwtSecretKey = 'F2dN7x8HVzBWaQuEEDnhsvHXRWqAAR63z';
const jwtExpireInDays = '2d';
const bcryptSaltRounds = 12;


export async function signup(req, res) {
    const { username, password, name, email, url } = req.body;
    const found = await userRepository.findByUsername(username);
    if (found) {
        return res.status(409).json({ message: `${username} already exists` });
    }
    const hashed = await bcrypt.hash(password, bcryptSaltRounds);
    const userId = await userRepository.createUser({
        username,
        password: hashed,
        name,
        email,
        url,
    })
    const token = createJwtToken(userId);
    console.log(token)
    res.status(201).json({ token, username });
}

export async function login(req, res) {
    const { username, password } = req.body;
    const user = await userRepository.findByUsername(username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid user or password' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid user or password' });
    }

    const token = createJwtToken(user.id);
    res.status(200).json({ token, username });
}

export async function me(req, res, next) {
    const user = await userRepository.findById(req.userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ token: req.token, username: user.name });
}


function createJwtToken(id) {
    return jwt.sign({ id }, jwtSecretKey, { expiresIn: jwtExpireInDays });
}