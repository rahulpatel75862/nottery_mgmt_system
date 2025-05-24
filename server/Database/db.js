
import sql from 'mssql';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  port: parseInt(process.env.DB_PORT),  
  database: process.env.DB_NAME,
  options: {
    encrypt: false, 
    trustServerCertificate: true 
  }
};


export const getConnection = async () => {
  try {
    const pool = await sql.connect(dbConfig);
    console.log('Database connected successfully!');
    return pool;
  } catch (error) {
    console.error('Database connection Failed!', error);
    throw error;
  }
};
