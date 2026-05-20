const axios = require("axios");
const { envValue, loadLabEnv } = require("../env/load-env.cjs");

const { mode } = loadLabEnv();
const url = envValue("VITE_GEOIP_URL", "https://json.geoiplookup.io/");
const timeout = Number(envValue("VITE_API_TIMEOUT_MS", "8000"));

axios.get(url, { timeout })
  .then((response) => {
    console.log(`Mode: ${mode}`);
    console.log("Node.js response:");
    console.log("Status:", response.status);
    console.log("Content-Type:", response.headers["content-type"]);
    console.log("Data:", response.data);
    console.log("IP:", response.data?.ip);
    console.log("Country:", response.data?.country_name);
    console.log("City:", response.data?.city);
    console.log("ISP:", response.data?.isp);
  })
  .catch((error) => {
    console.log(`Mode: ${mode}`);
    console.log("Node.js error:");
    console.log(error.message);

    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Content-Type:", error.response.headers["content-type"]);
      console.log("Data:", error.response.data);
    }
  });
