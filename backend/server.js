const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { router: authRoutes } = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

app.listen(port, () => {
    console.log("Server running on port " + port);
});
