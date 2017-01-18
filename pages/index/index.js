//index.js
//获取应用实例
import userAPI from "../../utils/service/user.js";
var app = getApp()
Page({
  data: {

    userInfo: {}
  },

  onLoad: function () {
    //微信联登
    wx.login({
      success: (res) => {
        if (res.code) {
          userAPI.loginCode()
            .then(() => {

            }, () => {

            })
        }
      }
    })

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据 
      that.setData({
        userInfo: userInfo
      });

    })

    // userAPI.login()
    //   .then((res) => {

    //   }, (err) => {

    //   });


  }
})
