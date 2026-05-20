import axios from "axios";
import { env, logDebug, renderEnvTable } from "../shared/env.js";
import { renderAxiosError, renderJson, renderResponseSummary, setStatus } from "../shared/request-view.js";

renderEnvTable("#env-table");

async function run() {
  setStatus("requesting", "neutral");

  try {
    const response = await axios.get(env.vkUrl, {
      timeout: env.timeoutMs
    });

    const summary = renderResponseSummary(response);
    setStatus(`HTTP ${response.status}`, "success");
    renderJson("#result", summary);
    logDebug("VK browser response", summary);
  } catch (error) {
    const summary = renderAxiosError(error);
    setStatus("blocked or failed", "error");
    renderJson("#result", summary);
    logDebug("VK browser error", summary);
  }
}

run();
