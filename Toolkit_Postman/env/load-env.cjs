const fs = require("node:fs");
const path = require("node:path");

function parseArgsMode(argv = process.argv) {
  const modeIndex = argv.indexOf("--mode");

  if (modeIndex !== -1 && argv[modeIndex + 1]) {
    return argv[modeIndex + 1];
  }

  return process.env.LAB_MODE || "local";
}

function parseEnv(content) {
  return content
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .reduce((acc, line) => {
      const separator = line.indexOf("=");

      if (separator === -1) {
        return acc;
      }

      const key = line.slice(0, separator).trim();
      const rawValue = line.slice(separator + 1).trim();
      const value = rawValue.replace(/^['\"]|['\"]$/g, "");

      acc[key] = value;
      return acc;
    }, {});
}

function loadLabEnv(mode = parseArgsMode()) {
  const root = path.resolve(__dirname, "..");
  const files = [".env", ".env.local", `.env.${mode}`, `.env.${mode}.local`];
  const loaded = {};

  for (const file of files) {
    const filePath = path.join(root, file);

    if (!fs.existsSync(filePath)) {
      continue;
    }

    Object.assign(loaded, parseEnv(fs.readFileSync(filePath, "utf8")));
  }

  for (const [key, value] of Object.entries(loaded)) {
    process.env[key] = value;
  }

  process.env.LAB_MODE = mode;

  return {
    mode,
    values: loaded
  };
}

function envValue(key, fallback) {
  return process.env[key] || fallback;
}

module.exports = {
  envValue,
  loadLabEnv,
  parseArgsMode
};
