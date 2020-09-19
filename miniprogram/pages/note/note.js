import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const app = getApp();
const $util = require('../../common/util')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    pagetitle: '动态',
    show: false,
    minDate: new Date(2020, 7, 1).getTime(),
    maxDate: undefined,
    currentDate: new Date(),
    currentTime: '',
    noteContent: [],
    remind: true,
    dialogShow: false,
    deleteId: '',
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
  deleteNote(e) {
    this.setData({
      dialogShow: true,
      deleteId: e.currentTarget.dataset.id
    })
  },
  onClose() {
    this.setData({
      dialogShow: false,
      deleteId: ''
    })
  },
  onConfirm() {   //确定删除
    this.setData({
      remind: true
    })
    console.log(this.data.deleteId);
    wx.cloud.callFunction({
      name: 'deleteNote',
      data: {
        id: this.data.deleteId
      },
      success(res) {
        console.log(res);
      },
      fail(err) {
        console.log(err)
      },
      complete: () => {
        this.onLoad()
        setTimeout(() => {
          this.setData({
            remind: false
          })
        }, 50)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // YYYY-mm-dd HH:MM
  onLoad: function (options) {
    this.getNote()
    let time=$util.dateFormat("YYYY-mm-dd", new Date())
    let currentTime =time.substring(0,7)
    let nowYear = time.substring(0,4)
    let nowMonth = time.substring(5,7) - 1
    let nowDay =time.substring(8,10)
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

  },
  getNote() {
    const that = this
    //调用云函数
    wx.cloud.callFunction({
      name: 'getNote',
      success(res) {
        if (res.result.data.length == 0) {
          that.setData({
            noteContent: [{ content: '当前还没有动态哦！点击下方加号创建自己的第一条动态', createTime: $util.dateFormat("YYYY-mm-dd HH:MM", new Date()),fileID:["cloud://wodeyun-g8zb3.776f-wodeyun-g8zb3-1302804316/static/heart.jpg"] }]
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
        }, 50)
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