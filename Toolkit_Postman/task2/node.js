const axios = require("axios");

axios.get("https://vk.com")
    .then((response) => {
        console.log("Node.js response:");
        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers["content-type"]);
        console.log("Data fragment:");
        console.log(response.data.slice(0, 500));
    })
    .catch((error) => {
        console.log("Node.js error:");
        console.log(error.message);

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Data fragment:");
            console.log(String(error.response.data).slice(0, 500));
        }
    });