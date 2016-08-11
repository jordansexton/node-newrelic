'use strict'

// Return a new copy of this array every time we're called
module.exports = function instrumentations() {
  return [
    'bluebird',
    'generic-pool',
    'ioredis',
    'pg',
    'q',
    'redis'
  ]
}
