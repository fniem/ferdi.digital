module.exports = {
  apps: [
    {
      name: "ferdi.digital",
      port: "3002",
      exec_mode: "cluster",
      instances: "max",
      script: ".output/server/index.mjs",
      env: {
        NODE_ENV: "production",
      },
      env_file: ".env",
    },
  ],
};
