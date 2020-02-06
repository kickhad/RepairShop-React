module.exports = {
  env: 'production',

  /**
   * PostgreSQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  database: {
    username: 'postgres',
    dialect: 'postgres',
    password: '',
    database: 'postgres',
    host: 'postgres',
    logging: console.log,
  },

  /**
   * MySQL configuration for Sequelize.
   * More info: https://sequelize.org/v5/manual/getting-started.html#setting-up-a-connection
   */
  // database: {
  //   username: 'root',
  //   dialect: 'mysql',
  //   password: '',
  //   database: 'production',
  //   host:
  //     '<insert public ip here>',
  //   logging: console.log,
  // },

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: 'https://<insert project id here>.firebaseapp.com',


};
