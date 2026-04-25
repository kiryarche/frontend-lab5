import axios from "axios";

axios.get("https://vk.com")
    .then((response) => {
        console.log("Browser response:");
        console.log("Status:", response.status);
        console.log("Data:", response.data);
    })
    .catch((error) => {
        console.log("Browser error:");
        console.log(error.message);
    });