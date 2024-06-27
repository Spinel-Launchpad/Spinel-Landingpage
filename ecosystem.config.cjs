module.exports = {
  apps: [
    {
      name: "spinel-lading-page",
      script: "yarn preview --port 7771 --host",
      env: {
        PM2_SERVE_PATH: "./dist", // The path to the build directory
        PM2_SERVE_PORT: 7772, // The port you want the server to run on
        PM2_SERVE_SPA: "true", // Serve as Single Page Application
        PM2_SERVE_HOMEPAGE: "/index.html", // Entry point
      },
    },
  ],
};
