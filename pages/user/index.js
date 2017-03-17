//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {}
  },

  onLoad: function () {

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo()
    .then((userInfo)=>{
       that.setData({
        userInfo: userInfo
      })
    })
  },
  toInfo: () => {
wx.navigateTo({
  url: './info',
  success: function(res){
    // success
  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
  }
})
