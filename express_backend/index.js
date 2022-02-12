const session = require('express-session');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(cors({credentials: true, origin: 'http://host.docker.internal:3001'}));

app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: false,
        cookie: { /* can add cookie related info here */ }
    })
);

app.get('/', function (req, res) {
    if (!req.session.pageCounter)
        req.session.pageCounter = 0;
    req.session.pageCounter++;
    res.send({
        pageCount: req.session.pageCounter
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

