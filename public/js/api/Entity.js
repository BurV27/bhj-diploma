class Entity {
  constructor(URL) {
    this.URL = URL;
  }

  static list(data, callback) {
    createRequest({
        url: this.URL,
        data,
        method: "GET",
        callback: (err, response) => {
        callback(err, response)
      }
    });
  }

  static create(data, callback) {
     createRequest({
        url: this.URL,
        data,
        method: "PUT",
        callback: (err, response) => {
        callback(err, response)
      }
    });
  }

  static remove(data, callback) {
     createRequest({
        url: this.URL,
        data,
        method: "DELETE",
        callback: (err, response) => {
        callback(err, response)
      }
    });
  }
}
