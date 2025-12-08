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
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) UNIQUE NOT NULL,
        password VARCHAR(200) NOT NULL
      );
      `;

const createPostsTable = `
      CREATE TABLE IF NOT EXISTS "posttable" (
	    "id" SERIAL PRIMARY KEY,         
	    "body" VARCHAR(200) NOT NULL,
        "urllink" TEXT,
        "post_date" DATE NOT NULL
    );
    `;


const initDB = async () => {
    try {
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