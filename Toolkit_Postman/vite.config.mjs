import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";

const fromRoot = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const appEnv = env.VITE_APP_ENV || mode;
  const port = Number(env.VITE_DEV_PORT) || 5173;

  return {
    appType: "mpa",
    server: {
      port,
      strictPort: false,
      open: false
    },
    preview: {
      port: port + 1000,
      strictPort: false
    },
    build: {
      outDir: `dist/${appEnv}`,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          index: fromRoot("./index.html"),
          task1: fromRoot("./task1/index.html"),
          task2: fromRoot("./task2/index.html"),
          task3: fromRoot("./task3/index.html")
        }
      }
    }
  };
});
