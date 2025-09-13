class User {
  constructor(URL = "/user") {
    this.URL = URL;
  }

  static setCurrent(user) {
    localStorage.setItem("user", user);
  }

  static unsetCurrent() {
    localStorage.removeItem("user");
  }

  static current() {
    if (localStorage.getItem("user") === null) {
      return undefined;
    }
    return localStorage.getItem("user");
  }

  static fetch(callback) {
    createRequest({
      url: this.url,
      method: "GET",
      callback: (err, response) => {
        if (response && response.success) {
          return this.setCurrent(response.user);
        }
        this.unsetCurrent();
        callback(err, response);
      },
    });
  }

  static login(data, callback) {
    createRequest({
      url: this.URL + "/login",
      method: "POST",
      responseType: "json",
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      },
    });
  }

  static register(data, callback) {
    createRequest({
      url: this.url + "/register",
      data,
      method: "POST",
      callback: (err, response) => {
        if (response && response.success) {
          this.setCurrent(response.user);
        }
        callback(err, response);
      },
    });
  }

  static logout(callback) {
    createRequest({
      url: this.url + '/logout',
      method: 'POST',
      callback: (err, response) => {
        callback(err, response);
        if(response && response.success){
          this.unsetCurrent()
        }
      }
    })
  }
}
