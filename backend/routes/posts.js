const express = require('express');
const router = express.Router();
const { pool } = require('../database');
const { isAuthenticated } = require('./auth');

// GET ALL POSTS
router.get('/', isAuthenticated, async (req, res) => {
    try {
        const result = await pool.query(
            `SELECT id, body, urllink, post_date FROM posttable ORDER BY post_date DESC`
        );
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// GET ONE POST
router.get('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT * FROM posttable WHERE id = $1`, [id]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// CREATE POST
router.post('/', isAuthenticated, async (req, res) => {
    try {
        const { body, urllink } = req.body;

        const result = await pool.query(
            `INSERT INTO posttable(body, urllink, post_date) values ($1, $2, $3) RETURNING*`,
            [body, urllink, new Date()]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// UPDATE POST
router.put('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;
        const { body, urllink } = req.body;

        const result = await pool.query(
            `UPDATE posttable SET (body, urllink, post_date) = ($2, $3, $4) WHERE id = $1`,
            [id, body, urllink, new Date()]
        );

        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// DELETE ONE POST
router.delete('/:id', isAuthenticated, async (req, res) => {
    try {
        const { id } = req.params;

        const result = await pool.query(
            `DELETE FROM posttable WHERE id = $1`,
            [id]
        );

        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

// DELETE ALL POSTS
router.delete('/', isAuthenticated, async (req, res) => {
    try {
        const result = await pool.query("TRUNCATE posttable");
        res.json(result);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
