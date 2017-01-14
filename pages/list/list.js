import articleAPI from '../../utils/service/article.js';
let app = getApp();
Page({
  data: {
    index: 1,
    pageSize: 10,
    category: 0,
    isBottom: false,
    list: [],
    hideNav: false,
    touch: {
      x: 0,
      y: 0
    }
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    let that = this;
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    articleAPI.getPage(this.data.category, this.data.index, this.data.pageSize, () => {
      wx.hideToast();
    })
      .then((res) => {
        // success
        if (res.data && res.data.isSuccess) {
          if (res.data.list.length > 0) {
            this.setData({ index: this.data.index + 1 });
          } else {
            this.setData({ isBottom: true });
          }
          that.setData({
            list: res.data.list
          })
        } else {
          wx.showModal({
            title: '加载错误',
            content: res.data.err,
            showCancel: false
          })
        }
      }, (err) => {
        // fail
        wx.showModal({
          title: '加载错误',
          content: err,
          showCancel: false
        })
      })

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载


  },
  onPullDownRefresh: function () {
    // 页面相关事件处理函数--监听用户下拉动作

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 10000
    })
    articleAPI.getPage(this.data.category, this.data.index, this.data.pageSize, () => {
      wx.hideToast();
    })
      .then((res) => {
        let data = res.data;
        if (data && data.isSuccess) {
          if (res.data.list.length > 0) {
            this.setData({ index: this.data.index + 1 });
          }
          else {
            this.setData({ isBottom: true });
            wx.stopReachBottom;
          }
          this.setData({ list: this.data.list.concat(data.list) });
        } else {
          wx.showModal({
            title: '加载错误',
            content: res.data.err,
            showCancel: false
          })
        }
      }, (err) => {
        wx.showModal({
          title: '加载错误',
          content: err,
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
  },
  goDetail: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.url
    })
  },
  mytouchstart: function (event) {
    this.setData({ 'touch.y': event.touches[0].clientY });
  },
  mytouchmove: function (event) {

    let oldY = this.data.touch.y;
    let currentY = event.touches[0].clientY;
    
    if (currentY - oldY > 10) {
      this.setData({ hideNav: false });
    }

    if (oldY - currentY > 10) {
      this.setData({ hideNav: true });
    }
  }
})