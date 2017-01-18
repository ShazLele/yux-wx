import api from "./api.js";

class userAPI {
  constructor() {

  }
  login(email = '1350981172@qq.com', password = '123456', complete) {

    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: api.userAPI.login,
        data: {
          email: email,
          password: password
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success 
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        },
        complete: function () {
          // complete

          typeof complete == 'function' && complete();
        }
      })
    })
    return promise;
  }
  
  loginCode(code, complete) {
    let promise = new Promise((resolve, reject) => {
      wx.request({
        url: api.userAPI.login,
        data: {
          code: code
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success 
          resolve(res);
        },
        fail: function (err) {
          reject(err);
        },
        complete: function () {
          // complete

          typeof complete == 'function' && complete();
        }
      })
    })
    return promise;
  }
  logout() {
    wx.request({
      url: api.userAPI.logout,
      data: {},
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT 
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
}

export default new userAPI();