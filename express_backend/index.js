const session = require('express-session');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors')

app.use(cors({credentials: true, origin: 'http://host.docker.internal:3000'}));

app.use(
    session({
        secret: 'secret string',
        resave: false,
        saveUninitialized: false,
        cookie: { /* can add cookie related info here */ }
    })
);

app.get('/', function (req, res) {
    if (!req.session.pageCountByCurrentUserOrAnyNameYouWant)
        req.session.pageCountByCurrentUserOrAnyNameYouWant = 0;
    req.session.pageCountByCurrentUserOrAnyNameYouWant++;
    res.send({
        pageCount: req.session.pageCountByCurrentUserOrAnyNameYouWant
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

