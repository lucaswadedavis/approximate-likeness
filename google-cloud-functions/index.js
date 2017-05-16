const Cors = require('cors');

// TODO: Handle authentication and authorization with AuthZero

/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
const senti = function senti(req, res) {
  res.set('Access-Control-Allow-Origin', "*");
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  // Example input: {"data": "Hello!"}
  var data = req.body.data;

  if (data === undefined) {
    // This is an error case, as "data" is required.
    res.status(400).send('No message defined!');
  } else {
    // Everything is okay.
    // TODO: replace Math.random with the actual sentiment analysis thing.
    res.status(200).send({score: Math.random()});
  }
};

// Magic to make cross-origin stuff work.
exports.senti = function(req, res) {
  const cors = Cors();
  cors(req, res, function() {
    senti(req, res);
  });
};

