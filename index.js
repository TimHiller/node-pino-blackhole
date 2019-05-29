const pino = require( "pino" )();
const blackhole = require( "stream-blackhole" );

module.exports = function ( name ) {
  name = name || '/dev/null';

  return pino.child({
    name: name,
    stream: blackhole()
  })
};