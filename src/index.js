const express = require('express');
const { dataSource } = require('./utils');
const UserController = require('./controller/user');
const cors = require('cors');
const colors = require('colors');
const app = express();

const { hashPassword } = require("./auth.js");

colors.enable();
app.use(express.json());
app.use(cors());

app.post("/api/users", hashPassword, UserController.postUser);
app.put("/api/users/:id", hashPassword, UserController.updateUser);

const start = async () => {
    await dataSource.initialize();
    app.listen(5000, () => console.log('Listening on port 5000'));
}

start();