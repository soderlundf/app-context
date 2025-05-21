const { asyncLocalStorage } = require('./context');

function logWithRequestId(message) {
  const store = asyncLocalStorage.getStore();
  const requestId = store?.requestId || 'unknown';
  console.log(`[${requestId}] ${message}`);
}

module.exports = { logWithRequestId };
