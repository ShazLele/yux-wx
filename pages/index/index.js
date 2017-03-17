//index.js
//获取应用实例
import userAPI from "../../utils/service/user.js";
var app = getApp()
Page({
  data: {

    userInfo: {}
  },

  onLoad: function () {
    //调用应用实例的方法获取全局数据
    app.getUserInfo()
      .then((userInfo) => {
        this.setData({
          userInfo: userInfo
        });
      });

  }
})
