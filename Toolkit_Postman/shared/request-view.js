export function setStatus(message, tone = "neutral") {
  const status = document.querySelector("#status");

  if (!status) {
    return;
  }

  status.textContent = message;
  status.dataset.tone = tone;
}

export function renderJson(target, payload) {
  const root = typeof target === "string" ? document.querySelector(target) : target;

  if (!root) {
    return;
  }

  root.textContent = typeof payload === "string" ? payload : JSON.stringify(payload, null, 2);
}

export function renderResponseSummary(response) {
  return {
    status: response.status,
    statusText: response.statusText,
    contentType: response.headers?.["content-type"] ?? "not provided",
    dataPreview: typeof response.data === "string" ? response.data.slice(0, 700) : response.data
  };
}

export function renderAxiosError(error) {
  if (error.response) {
    return {
      message: error.message,
      status: error.response.status,
      statusText: error.response.statusText,
      contentType: error.response.headers?.["content-type"] ?? "not provided",
      dataPreview: typeof error.response.data === "string" ? error.response.data.slice(0, 700) : error.response.data
    };
  }

  return {
    message: error.message,
    note: "In a browser this usually means the request was blocked by CORS or by the network before a response became available to JavaScript."
  };
}
