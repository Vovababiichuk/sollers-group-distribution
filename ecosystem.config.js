export const Mymodule = {
  apps: [
    {
      name: 'sollers-group-tailwind',
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
