import { env, renderEnvTable } from "./env.js";

const title = document.querySelector("#app-title");
const mode = document.querySelector("#mode-pill");

if (title) {
  title.textContent = env.appTitle;
}

if (mode) {
  mode.textContent = env.appEnv;
}

renderEnvTable("#env-table");
