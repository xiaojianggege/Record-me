// miniprogram/pages/essay/essay.js
const $util = require('../../common/util')
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '涂涂改改',
    placeholder: '就写这吧',
    pageTitle: '便签',
    remind: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        remind: false
      })
    }, 500)
  },
  createRecord(e) {
    const that=this
    if (e.detail.content.length <= 0) {
      Toast('不能为空哦！')
      return
    }
    that.setData({
      remind: true
    })
    let createTime = $util.dateFormat("YYYY-mm-dd HH:MM", new Date())
    //调用云函数
    wx.cloud.callFunction({
      name: 'createRecord',
      data: {
        content: e.detail.content,
        createTime
      },
      success(res) {
        that.setData({
          remind: false
        })
        setTimeout(() => {
          wx.redirectTo({
            url: '/pages/record/record'
          })
        }, 50);

      },
      fail(err) {
        console.log(err)
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