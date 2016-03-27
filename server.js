var http = require('http');
var url = require('url');
var querystring = require('querystring');
var express = require('express');
var engine = require('ejs-locals');

var app = express();
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('home', {});
    res.end();
});

app.get('/todo', function(req, res) {
    var todolist = ["Coucou", "Toi"];
    res.render('todo', {todolist: todolist});
    res.end();
});

app.use(function(req, res, next) {
    res.writeHead(404, {
        "Content-Type": "text/html"
    });
    res.write(
        '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
        '<meta charset="UTF-8">' +
        '<title>404 not found</title>' +
        '</head>'+
        '<body>' +
        '<p>404 not found</p>' +
        '</body>' +
        '</html>'
    );
    res.end();
});

/* Démarrage du serveur sur le port 8000 */
app.listen(8000);
