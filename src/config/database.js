module.exports = {
  dialect: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  port: '5433',
  define: {
    timestamp: true,
    underscored: true,
    undersoredAll: true,
  },
};
