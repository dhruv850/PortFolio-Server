const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();
var skills_route = require('./skills/skills_controller');
var projects_route = require('./projects/projects_controller');
var blogs_route = require('./blogs/blogs_controller');

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

// middlewares
app.disable('etag');
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));

// route middleware
app.use("/api/projects", projects_route);
app.use("/api/skills", skills_route);
app.use("/api/blogs", blogs_route);

// port
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
