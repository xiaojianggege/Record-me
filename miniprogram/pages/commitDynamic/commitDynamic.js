// miniprogram/pages/commitDynamic/commitDynamic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '添加动态',
    placeholder: '快记下来吧',
    tempFilePaths: []
  },
  getImage() {
    let that = this
    let tempFilePaths = that.data.tempFilePaths
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePath = res.tempFilePaths
        tempFilePaths.unshift(tempFilePath)
        console.log(tempFilePaths)
        that.setData({
          tempFilePaths
        })
      }
    })
  },
  deletePic(e) {
    let currentIndex = e.currentTarget.dataset.index
    let tempFilePaths = this.data.tempFilePaths
    tempFilePaths = tempFilePaths.filter((item, index) => {
      return index !== currentIndex
    })
    console.log(tempFilePaths)
    this.setData({
      tempFilePaths
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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