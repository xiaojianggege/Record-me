// miniprogram/pages/note/note.js
const app = getApp();
const $util = require('../../common/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    show: false,
    minDate: new Date(2020, 8, 1).getTime(),
    maxDate: new Date(2025, 10, 5).getTime(),
    currentDate: new Date(),
    currentTime: '',
    noteContent: [],
    remind: true,
    formatter(type, currentTime) {
      if (type === 'year') {
        return `${currentTime}年`;
      } else if (type === 'month') {
        return `${currentTime}月`;
      }
      return currentTime;
    },
  },
  showPopup() {
    this.setData({
      show: true
    })
  },
  confirm(val) {
    let currentTime = $util.dateFormat("YYYY-mm", new Date(val.detail))
    this.setData({
      show: false,
      currentTime
    })
  },
  cancel() {
    this.setData({
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let currentTime = $util.dateFormat("YYYY-mm", new Date())
    this.setData({
      currentTime,
      userInfo: app.globalData.userInfo
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
    this.getNote()
  },
  getNote() {
    const that = this
    //调用云函数
    wx.cloud.callFunction({
      name: 'getNote',
      success(res) {
        that.setData({
          noteContent: res.result.data.reverse()
        })
      },
      fail(err) {
        console.log(err)
      },
      complete: () => {
        setTimeout(() => {
          this.setData({
            remind: false
          })
        }, 500)
      }
    })
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