module.exports = ({ env }) => ({
  host: env('APP_HOST', '0.0.0.0'),
  port: env.int('STRAPI_EMOJI_MDB_PORT'),
});
