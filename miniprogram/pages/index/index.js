const $util = require('../../common/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '首页',
    backgroundColor: '#505278',
    currentTime: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.getCurrentTime()
  },
  getCurrentTime() {
    this.setData({
      currentTime: $util.dateFormat("YYYY-mm-dd HH:MM:SS", new Date())
    })
    let clear = setInterval(() => {
      this.setData({
        currentTime: $util.dateFormat("YYYY-mm-dd HH:MM:SS", new Date())
      })
    }, 1000)
  },
  gotoNote() {
    app.globalData.navId = 1
    wx.navigateTo({
      url: '../note/note'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})