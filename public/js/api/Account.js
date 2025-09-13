class Account extends Entity {
  constructor(URL){
    super(URL) += "/account";
  }
  static get(id = '', callback){
    this.URL += id;
    createRequest({
      url: this.URL,
      data,
      method: "GET",
      callback: (err, response) => {
        callback(err, response)
      }
    })
  }
}
