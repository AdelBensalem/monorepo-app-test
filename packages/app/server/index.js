
const express = require('express');
const next = require('next');
const proxy = require('express-http-proxy');

const config = require(`../config/${process.env.NODE_ENV !== 'production' ? 'dev' : 'prod'}`);


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(
        '/api',
        proxy(`${config.api.protocol}://${config.api.host}:${config.api.port}`, {
            proxyReqOptDecorator: opts => {
                opts.headers['x-forwarded-host'] = 'localhost:3000';
                return opts
            }
        })
    );

    server.get('*', (req, res) => handle(req, res));
    server.listen(config.port, () => console.log(`App listening on port ${config.port}`));
});