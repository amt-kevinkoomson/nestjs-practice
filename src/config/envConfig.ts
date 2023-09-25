export default () => ({
  port: parseInt(process.env.PORT) || 3000,
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    url: process.env.DATABASE_URL,
    name: process.env.DATABASE_URL.split('/')[3].split('?')[0], // parse database name from testing database connection string
  },
  jwt: {
    secretKey: process.env.SECRET_KEY,
  },
});
