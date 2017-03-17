//app.js
import userService from "./utils/service/user.js";
App({
  onLaunch: function () {

  },
  getUserInfo: function () {
    return this.login();
  },
  login: function () {
    var that = this;
    let promise = new Promise((resolve, reject) => {
      //微信联登
      if (this.globalData.userInfo) {
        return resolve(this.globalData.userInfo);
      }
      wx.login({
        success: (res) => {
          let code = res.code;
          if (!code)
            return reject('code验证失败');
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo;
              userService.loginCode(code, res.userInfo)
                .then((data) => {

                  that.globalData.userInfo = data.data.obj;
                });
              resolve(res.userInfo);
            },
            fail: function (err) {
              reject(err);
            }
          })
        }
      })
    })
    return promise;
  },
  globalData: {
    userInfo: null
  }
})

