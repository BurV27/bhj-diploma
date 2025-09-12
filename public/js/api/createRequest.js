const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest();
  if (options.method === "GET") {
    xhr.open("GET", `${options.url}?${new URLSearchParams(options.data)}`);
    xhr.send();
  } else if (options.method === "POST") {
    const formData = new FormData(options.data);
    xhr.open("POST", options.url);
    xhr.send(formData);
  }
  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      options.callback(xhr.error, xhr.response);
    } else if (xhr.status !== 200) {
      options.callback(xhr.error);
    }
  });
};
