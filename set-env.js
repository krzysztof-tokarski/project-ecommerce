/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const dotenv = require('dotenv');
const fs = require('fs');

fs.readFile('.env', (err) => {
  if (err) {
    throw new Error('There is no .env file.');
  }

  dotenv.config();

  const appContent = `
export const environment = {
  API_URL: "${process.env.API_URL}",
  production: "${process.env.production}"
};`;

  fs.writeFile(
    './apps/project-ecommerce/src/environments/environment.ts',
    appContent,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  const apiContent = `
export const environment = {
  DB_CONNECTION_STRING: '${process.env.CONNECTION_STRING}',
  production: '${process.env.production}',
  JWT_SECRET: '${process.env.JWT_SECRET}'
};
`;

  fs.writeFile(
    './apps/api/src/environments/environment.ts',
    apiContent,
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
});
