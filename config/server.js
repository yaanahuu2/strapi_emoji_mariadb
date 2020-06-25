module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('STRAPI_EMOJI_MDB_PORT'),
});
