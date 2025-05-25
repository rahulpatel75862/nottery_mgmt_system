import { getConnection } from './db.js';
import sql from 'mssql';

export const registerUser = async ({ userName, email, password, role }) => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .input('userName', sql.VarChar(100), userName)
            .input('password', sql.VarChar(255), password)
            .query('INSERT INTO users (userName, password) VALUES (@userName, @password)');
        return result;
    } catch (error) {
        throw error;
    }
};

export const fetchAllUsers = async () => {
    try {
        const pool = await getConnection();
        const result = await pool.request()
            .query('SELECT * FROM users');
        return result.recordset;
    } catch (error) {
        throw error;
    }
};