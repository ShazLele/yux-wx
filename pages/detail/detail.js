import articleService from "../../utils/service/article.js";
import WxParse from "../../plugins/wxParse/wxParse.js";
import util from "../../utils/util.js";
Page({
  data: {
    info: {}
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    let that = this;

    articleService.getInfo(options._id)
      .then((res) => {
        if (res.data && res.data.isSuccess) {
          this.setData({ info: res.data.obj });
          let content = res.data.obj.content;
          content = util.formatPreHTML(content);
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

  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})