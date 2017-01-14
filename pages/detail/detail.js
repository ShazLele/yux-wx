import articleAPI from "../../utils/service/article.js";
import WxParse from "../../plugins/wxParse/wxParse.js";
Page({
  data: {
    info: {}
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    let that = this;

    articleAPI.getInfo(options._id)
      .then((res) => {
        if (res.data && res.data.isSuccess) {
          this.setData({ info: res.data.obj });
          let content = res.data.obj.content;
          content = content.replace(/<img src="\//g, '<img src="http://www.moguiweb.com.cn/');
          WxParse.wxParse('content', 'html', content, that, 5);
        } else {
          wx.showModal({
            title: '加载错误',
            content: '文章内容加载错误，请重试',
            showCancel: false
          })
        }
      }, (err) => {
        wx.showModal({
          title: '加载错误',
          content: '文章内容加载错误，请重试',
          showCancel: false
        })
      })


  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },

  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})