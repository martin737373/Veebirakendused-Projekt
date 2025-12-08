const express = require('express');
const router = express.Router();
const { pool } = require('../database');
const { isAuthenticated } = require('./auth');

router.get('/', isAuthenticated, async (req, res) => {
    try {
        // GET ALL POSTS
        const result = await pool.query(
            "SELECT id, body, date FROM posts ORDER BY date DESC"
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        // GET ONE POST
        const result = await pool.query(
            "SELECT id, body, date FROM posts WHERE id = $1",
            [id]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.post('/', isAuthenticated, async (req, res) => {
    try {
        const { body } = req.body;
        const userId = req.user.id;
        // CREATE NEW POST
        const result = await pool.query(
            "INSERT INTO posts(body, user_id) VALUES ($1, $2) RETURNING id, body, date",
            [body, userId]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.put('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req.body;
        // UPDATE POST
        const result = await pool.query(
            "UPDATE posts SET body = $1 WHERE id = $2 RETURNING id, body, date",
            [body, id]
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.delete('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        // DELETE POST
        const result = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

router.delete('/', isAuthenticated, async (req, res) => {
    try {
        // DELETE ALL
        const result = await pool.query("DELETE FROM posts");
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

