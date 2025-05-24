import bcrypt from 'bcryptjs';
import { registerUser } from "../Database/queries.js";

const register = async (req, res) => {
    try {
        const { userName, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        await registerUser({ userName, email, password: hashedPassword, role });

        res.status(200).json({ message: "User registered successfully!" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export default register;