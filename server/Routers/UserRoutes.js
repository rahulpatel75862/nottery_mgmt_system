import express from 'express';
import {signin, getAllUsers} from '../controllers/UserController.js';

const router = express.Router();

router.post("/login", signin);
router.get("/users", getAllUsers);

export default router;