import bcrypt from 'bcryptjs';
import { fetchAllUsers } from "../Database/queries.js";
import { getConnection } from '../Database/db.js';
import sql from 'mssql'

export const signin = async (req, res) => {
    const { userName, password } = req.body;
  
    if (!userName || !password) {
      return res.status(400).json({ success: false, message: 'Username and password are required' });
    }
  
    try {
      const pool = await getConnection();
  
      // Query user by userName
      const result = await pool.request()
        .input('userName', sql.VarChar(100), userName)
        .query('SELECT * FROM users WHERE userName = @userName');
  
      const user = result.recordset[0];
  
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
  
      // Check password (assuming user.password stores hashed password)
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ success: false, message: 'Invalid password' });
      }
  
      // Success
      return res.status(200).json({ success: true, message: 'Login successful!' });
  
    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ success: false, message: 'Internal server error' });
    }
  };

export const getAllUsers = async (req, res) => {
    try {
        const users = await fetchAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Failed to get users" });
    }
};
