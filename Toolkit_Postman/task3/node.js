const axios = require("axios");

axios.get("https://json.geoiplookup.io/")
    .then((response) => {
        console.log("Node.js response:");
        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers["content-type"]);
        console.log("Data:", response.data);

        console.log("IP:", response.data.ip);
        console.log("Country:", response.data.country_name);
        console.log("City:", response.data.city);
        console.log("ISP:", response.data.isp);
    })
    .catch((error) => {
        console.log("Node.js error:");
        console.log(error.message);

        if (error.response) {
            console.log("Status:", error.response.status);
            console.log("Data:", error.response.data);
        }
    });