module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'hryer-db'),
        username: env('DATABASE_USERNAME', 'hryer-admin'),
        password: env('DATABASE_PASSWORD', 'harryerm2010'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
