// miniprogram/pages/commitDynamic/commitDynamic.js
const $util = require('../../common/util')
const app =  getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    pageTitle: '添加动态',
    placeholder: '快记下来吧',
    tempFilePaths: [],
    userInfo: {},
    fileID: [],
    content: ''
  },
  getImage() {
    let that = this
    let tempFilePaths = that.data.tempFilePaths
    if (tempFilePaths.length >= 3) {
      //提醒最多三张
      return;
    }
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],// 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],// 可以指定来源是相册还是相机，默认二者都有
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        for (let item of res.tempFilePaths) {
          tempFilePaths.unshift(item)
        }
        that.setData({
          tempFilePaths
        })
      }
    })
  },

  commitNote() {
    let that = this;
    wx.showLoading({
      title: '上传中',
    });
    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
    let tempFilePaths = that.data.tempFilePaths
    for (let i = 0; i < tempFilePaths.length; i++) {
      const cloudPath = parseInt(Math.floor(Math.random() * (9999 - 1000 + 1) + 100), 10) + "" + new Date().getTime() + tempFilePaths[i].match(/\.[^.]+?$/)
      wx.cloud.uploadFile({
        cloudPath,//云存储图片名字
        filePath: tempFilePaths[i],//临时路径
        success(res) {
          let fileID = that.data.fileID
          fileID.push(res.fileID)
          that.setData({
            fileID//云存储图片路径,可以把这个路径存到集合，要用的时候再取出来
          });
        },
        fail: e => {
          console.error('[上传图片] 失败：', e)
        },
        complete: () => {
          wx.hideLoading()
        }
      });
    }
    that. createNote()
  },
  createNote() {
    let createTime = $util.dateFormat("YYYY-mm-dd HH:MM", new Date())
          //调用云函数
          wx.cloud.callFunction({
            name: 'createNote',
            data: {
              content: this.data.content,
              fileID: this.data.fileID,
              createTime,
              updateTime: createTime
            },
            success(res) {
              console.log(res)
              // Notify({ type: 'primary', message: '创建成功', duration: 1500, selector: '#notify-selector', background: '#28a745' });
              setTimeout(() => {
                wx.redirectTo({
                  url: '/pages/note/note'
                })
              }, 1000);
            },
            fail(err) {
              console.log(err)
            }
          })
  },
  contentInput(e) {
    this.setData({
      content: e.detail.value
    })
  },
  deletePic(e) {
    let currentIndex = e.currentTarget.dataset.index
    let tempFilePaths = this.data.tempFilePaths
    tempFilePaths = tempFilePaths.filter((item, index) => {
      return index !== currentIndex
    })
    this.setData({
      tempFilePaths
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      currentTime:$util.dateFormat('HH:MM',new Date()),
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