const next = require('next');
const Hapi = require('hapi');

const { pathWrapper, defaultHandlerWrapper, nextHandlerWrapper } = require('./next-wrapper');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dir: './src', dev });
const server = Hapi.server({
    host: 'localhost',
    port: process.env.PORT || 4000
});

app
.prepare()
.then(async () => {
    server.route({
        method: 'GET',
        path: '/health',
        handler: (request, h) => ({ status: 'OK' })
    });

    server.route({
        method: 'GET',
        path: '/_next/{p*}', /* next specific routes */
        handler: nextHandlerWrapper(app)
    });

    server.route({
        method: 'GET',
        path: '/p/{id}',
        handler: async ({ raw, query, params }) =>
            app.renderToHTML(
              raw.req,
              raw.res,
              '/post',
              {
                id: params.id,
                ...params,
              },
              {}),
    });

    server.route({
        method: 'GET',
        path: '/{p*}', /* catch all route */
        handler: defaultHandlerWrapper(app)
    });

    try {
        await server.start();
        console.log('Server running at:', server.info.uri);
    } catch (error) {
        console.log('Error starting server');
        console.log(error);
        process.exit(1);
    }
});
