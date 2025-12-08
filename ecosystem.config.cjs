module.exports = {
  apps: [
    {
      name: "ferdi.digital",
      script: ".output/server/index.mjs",
      exec_mode: "fork",
      instances: 1,
      env: {
        NODE_ENV: "production",
        NITRO_PORT: 3002,
        NITRO_HOST: "0.0.0.0",
      },
      env_file: ".env",
    },
  ],
};
