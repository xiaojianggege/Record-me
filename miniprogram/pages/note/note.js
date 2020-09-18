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
    minDate: new Date(2020, 7, 1).getTime(),
    maxDate: undefined,
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
    let nowYear = $util.dateFormat("YYYY", new Date())
    let nowMonth = $util.dateFormat("mm", new Date()) - 1
    let nowDay = $util.dateFormat("dd", new Date())
    let currentTime = $util.dateFormat("YYYY-mm", new Date())
    this.setData({
      currentTime,
      userInfo: app.globalData.userInfo,
      maxDate: new Date(nowYear, nowMonth, nowDay).getTime()
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
        if (res.result.data.length == 0) {
          that.setData({
            noteContent: [{ content: '当前还没有动态哦！点击下方加号创建自己的第一条动态',createTime:$util.dateFormat("YYYY-mm-dd HH:MM", new Date())}]
          })
          
          return
        };
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