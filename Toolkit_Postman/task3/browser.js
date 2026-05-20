import axios from "axios";
import { env, logDebug, renderEnvTable } from "../shared/env.js";
import { renderAxiosError, renderJson, renderResponseSummary, setStatus } from "../shared/request-view.js";

renderEnvTable("#env-table");

async function run() {
  setStatus("requesting", "neutral");

  try {
    const response = await axios.get(env.geoipUrl, {
      timeout: env.timeoutMs
    });

    const summary = {
      ...renderResponseSummary(response),
      extractedFields: {
        ip: response.data?.ip,
        country: response.data?.country_name,
        city: response.data?.city,
        isp: response.data?.isp
      }
    };

    setStatus(`HTTP ${response.status}`, "success");
    renderJson("#result", summary);
    logDebug("GeoIP browser response", summary);
  } catch (error) {
    const summary = renderAxiosError(error);
    setStatus("blocked or failed", "error");
    renderJson("#result", summary);
    logDebug("GeoIP browser error", summary);
  }
}

run();
