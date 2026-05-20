const rawEnv = import.meta.env;

export const env = {
  mode: rawEnv.MODE,
  appEnv: rawEnv.VITE_APP_ENV ?? rawEnv.MODE,
  appTitle: rawEnv.VITE_APP_TITLE ?? "Toolkit/Postman Lab",
  vkUrl: rawEnv.VITE_VK_URL ?? "https://vk.com",
  geoipUrl: rawEnv.VITE_GEOIP_URL ?? "https://json.geoiplookup.io/",
  reqresUrl: rawEnv.VITE_REQRES_URL ?? "https://reqres.in/api",
  timeoutMs: Number(rawEnv.VITE_API_TIMEOUT_MS ?? 8000),
  rotationSpeed: Number(rawEnv.VITE_ROTATION_SPEED ?? 0.03),
  rectangleColor: rawEnv.VITE_RECTANGLE_COLOR ?? "0x3498db",
  debug: rawEnv.VITE_ENABLE_DEBUG === "true"
};

export function colorFromEnv(value) {
  return Number.parseInt(String(value).replace("#", "0x"), 16);
}

export function renderEnvTable(target) {
  const root = typeof target === "string" ? document.querySelector(target) : target;

  if (!root) {
    return;
  }

  const rows = [
    ["MODE", env.mode],
    ["VITE_APP_ENV", env.appEnv],
    ["VITE_APP_TITLE", env.appTitle],
    ["VITE_VK_URL", env.vkUrl],
    ["VITE_GEOIP_URL", env.geoipUrl],
    ["VITE_REQRES_URL", env.reqresUrl],
    ["VITE_API_TIMEOUT_MS", `${env.timeoutMs}`],
    ["VITE_ROTATION_SPEED", `${env.rotationSpeed}`],
    ["VITE_RECTANGLE_COLOR", env.rectangleColor],
    ["VITE_ENABLE_DEBUG", `${env.debug}`]
  ];

  root.innerHTML = `
    <table class="env-table">
      <tbody>
        ${rows.map(([key, value]) => `<tr><th>${key}</th><td>${value}</td></tr>`).join("")}
      </tbody>
    </table>
  `;
}

export function logDebug(...args) {
  if (env.debug) {
    console.log(...args);
  }
}
