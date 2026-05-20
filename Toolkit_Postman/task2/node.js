const axios = require("axios");
const { envValue, loadLabEnv } = require("../env/load-env.cjs");

const { mode } = loadLabEnv();
const url = envValue("VITE_VK_URL", "https://vk.com");
const timeout = Number(envValue("VITE_API_TIMEOUT_MS", "8000"));

axios.get(url, { timeout })
  .then((response) => {
    console.log(`Mode: ${mode}`);
    console.log("Node.js response:");
    console.log("Status:", response.status);
    console.log("Content-Type:", response.headers["content-type"]);
    console.log("Data fragment:");
    console.log(String(response.data).slice(0, 700));
  })
  .catch((error) => {
    console.log(`Mode: ${mode}`);
    console.log("Node.js error:");
    console.log(error.message);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Content-Type:", error.response.headers["content-type"]);
      console.log("Data fragment:");
      console.log(String(error.response.data).slice(0, 700));
    }
  });
