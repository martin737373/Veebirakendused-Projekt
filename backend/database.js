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
        console.error(error.stack);
        return false;
    }
};

const createUsersTable = `
      CREATE TABLE IF NOT EXISTS "users" (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL
      );

      CREATE UNIQUE INDEX IF NOT EXISTS users_email_case_insensitive_idx ON users (LOWER(email));
      `;

const createPostsTable = `
      CREATE TABLE IF NOT EXISTS "post_table" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" TEXT NOT NULL,
        "urllink" TEXT,
        "post_date" DATE NOT NULL
    );
    `;


const initDB = async () => {
    try {
        if (await execute(createUsersTable)) {
            console.log('Table "users" is created');
        } else {
            console.error('Failed to create "users" table');
        }

        if (await execute(createPostsTable)) {
            console.log('Table "posts" is created');
        } else {
            console.error('Failed to create "posts" table');
        }
    } catch (err) {
        console.error("DB init error:", err);
    }
};

initDB();

module.exports = { pool };