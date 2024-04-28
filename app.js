const express = require('express');
const chalk = require('chalk');
const path = require('path');
const debug = require('debug')('app');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000; 

const blogRouter = require('./src/routes/blogRoutes');
const feedRoutes = require('./routes/feed');


app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));


app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


app.use('/', blogRouter);
app.use('/feed', feedRoutes);

app.listen(port, () => {
    debug(`Listening on port ${chalk.green(port)}`);
});


mongoose.connect('mongodb+srv://sidnerusu:Siddu0606@project.lsmbimm.mongodb.net/?retryWrites=true&w=majority&appName=project')
    .then(() => {
        debug('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
