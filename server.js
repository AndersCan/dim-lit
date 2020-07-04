// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true });
const path = require('path');
const fs = require('fs');
const stream = require('stream');

const glob = require('glob');

const images = glob.sync('./src/assets/images/*.jpg');
console.log({ images });

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '/'),
});

// Declare a route
fastify.get('/', async (request, reply) => {
  return reply.sendFile('src/index.html');
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();

function sleep(ms) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
