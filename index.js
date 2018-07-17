const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');



const app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server, { serveClient: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(session({
//     secret: 'supersecretthingYES',
//     cookie: { maxAge: 1800000 }
// }));

app.use(express.static('public'));

var ws = require('./socket/socket.js')(io);

// const routes = require('./routes/routes')(app);

server.listen('8080', () => {
    console.log('Server started on port 8080');
});


