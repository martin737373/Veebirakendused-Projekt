// database.js
require('dotenv').config();
const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

const execute = async (query) => {
    try {
        await pool.query(query);
        return true;
    } catch (error) {
        console.error("Query failed:", query);
        console.error(error);
        throw error;
    }
};

const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL
      );
      `;

const createPostsTable = `
      CREATE TABLE IF NOT EXISTS posts (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        body TEXT NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        user_id uuid REFERENCES users(id) ON DELETE CASCADE
      );
      `;

const createPgcryptoExtension = `
        CREATE EXTENSION IF NOT EXISTS "pgcrypto";
        `;

const initDB = async () => {
    try {
        await execute(createPgcryptoExtension);
        console.log('Extension created');

        await execute(createUsersTable);
        console.log('Table "users" is created');

        await execute(createPostsTable);
        console.log('Table "posts" is created');
    } catch (err) {
        console.error("DB init error:", err);
    }
};

initDB();

module.exports = { pool };