export const Mymodule = {
  apps: [
    {
      name: 'next-portfolio-neon',
      script: 'node_modules/.bin/vite',
      args: 'build',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
