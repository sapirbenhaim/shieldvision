const app = require('./app/app');
const express = require('express');
const path = require('path');

const connection = require('./data/db/db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const streamRoutes = require('./routes/stream');
const camerasRoutes = require('./routes/cameras');
const subscriptionRoutes = require('./routes/premium');

// database connection
connection();

// Serve static files from the 'build' directory inside the 'frontend' folder
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// routes
app.use("/api/register", userRoutes);
app.use("/api/authentication", authRoutes);
app.use('/api/stream', streamRoutes);
app.use('/api/cameras', camerasRoutes);
app.use('/api/subscription', subscriptionRoutes);

console.log(path.join(__dirname, 'frontend', 'build', 'index.html'));


// Handle all other routes by serving the React app
app.get('/', (_, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));


