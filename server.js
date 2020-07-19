require('./mongoose-connect')
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routers')
var cors = require('cors');



const app = express()
const port = 8000
app.use(cors());
// const router = require('./routers')

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

app.use(router)

app.get('/', (req, res) => res.send("Hello"))

app.use((err, req, res, next) => {
    let message = err.message
    let stack = err.stack
    res.status(400).json({ message, stack })
})

app.use(function(req, res, next) {
    var allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8000', 'http://127.0.0.1:9000', 'http://127.0.0.1:5501/index.html', 'http://127.0.0.1:5501',
        'http://localhost:8000/api/list-music', 'http://localhost:8000/api/list-music/?search=em', 'http://localhost:8000/api/list-music/find/?search=em', 'http://localhost:8000/api/list-music/?pageSize=8&pageIndex=1',
        'https://longbody.github.io/listmusicfront', 'https://listmusicnodejs.herokuapp.com/api/list-music', 'https://listmusicnodejs.herokuapp.com/api/list-music/find/?search=em',
        'https://listmusicnodejs.herokuapp.com/api/list-music/?search=em', 'https://listmusicnodejs.herokuapp.com/api/list-music/?pageSize=8&pageIndex=1', 'localhost:7000/api/categories/find/?search=', 'https://listmusicnodejs.herokuapp.com/api/categories/find/?search='
    ];
    var origin = req.headers.origin;
    if (allowedOrigins.indexOf(origin) > -1) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
    res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    return next();
});

app.listen(process.env.PORT || 7000, '0.0.0.0', () => {
    console.log('listening on *:3000');
});