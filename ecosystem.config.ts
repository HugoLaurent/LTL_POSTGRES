//test
module.exports = {
  apps: [
    {
      name: 'adonis-app',
      script: 'node',
      args: 'ace serve --watch',
      watch: true,
      env: {
        NODE_ENV: 'development',
        HOST: '0.0.0.0',
        PORT: '3333',
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3333',
      },
    },
  ],
}
