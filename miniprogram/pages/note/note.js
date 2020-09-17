// miniprogram/pages/note/note.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    minDate: new Date(2020,8,1).getTime(),
    maxDate: new Date(2025,10,5).getTime(),
    currentDate: new Date(),
    value: '',
    formatter(type, value) {
    if (type === 'year') {
      return `${value}年`;
    } else if (type === 'month') {
      return `${value}月`;
    }
    return value;
  },
  },
  showPopup() {
    this.setData({
      show: true
    })
  },
  confirm(val) {
    let time = new Date(val.detail)
    let value = this.formatTime(time)
    this.setData({
      show: false,
      value
    })
  },
  // 格式化时间
  formatTime(val) {
    let year = val.getFullYear()
    let month = val.getMonth() + 1
    if (month >= 1 && month <= 9) { month = `0${month}` }
    return `${year}-${month}`
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let value = new Date()
    value = this.formatTime(value)
    this.setData({
      value
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