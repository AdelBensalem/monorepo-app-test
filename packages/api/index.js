const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const config = require(`./config/${process.env.NODE_ENV !== 'production' ? 'dev' : 'prod'}`);
const moduleRouter = require('./modules');


MongoClient.connect(config.mongo.url, {useNewUrlParser: true}, (err, client) => {
    const app = express();

    if (err) {
        app.use((req, res) => res.status(500).send('An error occurred'));
    }

    app.use((req, res, next) => {
        req.mongoInstance = client.db(config.mongo.db_name);
        next();
    });

    app.use(moduleRouter);

    app.listen(config.port, () => console.log(`Api running on port ${config.port}`));
});
