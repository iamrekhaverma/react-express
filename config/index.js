var dotenv = require('dotenv');

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV !== 'production') {
    const envFound = dotenv.config();
    if (envFound.error) {
        // This error should crash whole process
        throw new Error("⚠️  Couldn't find .env file  ⚠️");
    }
}
module.exports = {
  // port
  port: parseInt(process.env.PORT, 10),
  databaseURL: process.env.MONGODB_URI,
  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
