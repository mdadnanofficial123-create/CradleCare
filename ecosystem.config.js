module.exports = {
  apps: [
    {
      name: 'api',
      script: './apps/api/dist/main.js',
      cwd: './apps/api',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3000',
      cwd: './apps/web',
      instances: 1,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
