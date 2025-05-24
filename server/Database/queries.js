import { getConnection } from './db.js';
import sql from 'mssql';

export const registerUser = async ({ userName, email, password, role }) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('userName', sql.VarChar(100), userName)
            .input('email', sql.VarChar(100), email)
            .input('password', sql.VarChar(255), password)
            .input('role', sql.VarChar(50), role)
            .query('INSERT INTO users (userName, email, password, role) VALUES (@userName, @email, @password, @role)');
        return result;
    } catch (error) {
        throw error;
    }
};