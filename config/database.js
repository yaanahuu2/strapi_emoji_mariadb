module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('STRAPI_EMOJI_HOST', '127.0.0.1'),
        port: env.int('STRAPI_EMOJI_MDB_DB_PORT', 3306),
        database: env('STRAPI_EMOJIi_MDB_DB_NAME'),
        username: env('STRAPI_EMOJI_USER'),
        password: env('STRAPI_EMOJI_PASS'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
