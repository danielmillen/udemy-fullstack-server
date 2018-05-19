var environment;
if (process.env.NODE_ENV === 'production') {
  environment = require('./prod');
} else {
  environment = require('./dev');
}

module.exports = environment;
