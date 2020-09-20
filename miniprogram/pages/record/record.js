const $util = require('../../common/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '便签',
    recordContent: [],
    remind: true,
    dialogShow: false,
    deleteId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRecord()
  },
  getRecord() {
    const that = this
    //调用云函数
    wx.cloud.callFunction({
      name: 'getRecord',
      success(res) {
      
        if (res.result.data.length == 0) {
          that.setData({
            recordContent: [{
              createTime:$util.dateFormat("YYYY-mm-dd HH:MM", new Date()) ,
              title: "亲，当前还没有便签哦",
              content: "点击下方按钮创建第一题便签",
              state: "教程tag",
              mood: "happy"
            }]
          })
          return
        }
        that.setData({
          recordContent: res.result.data.reverse()
        })
      },
      fail(err) {
      }, complete: () => {
        this.setData({
          remind: false
        })
      }
    })
  },
  deleteRecord(e) {
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
    wx.cloud.callFunction({
      name: 'deleteRecord',
      data: {
        id: this.data.deleteId
      },
      success(res) {
      },
      fail(err) {
      },
      complete: () => {
        this.onLoad()
        setTimeout(() => {
          this.setData({
            remind: false
          })
        }, 500)
      }
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