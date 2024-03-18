const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routes/user.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', "ejs");

app.use('/', userRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});