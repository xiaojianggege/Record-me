// miniprogram/pages/suggestion/suggestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "意见建议",
    placeholder: "可以在此输入您的意见"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  commitSuggestion(e) {
    console.log(e.detail.content);
    //调用云函数
    wx.cloud.callFunction({
      name: 'createSuggest',
      data: {
        content: e.detail.content
      },
      success(res) {
        console.log(res)

        // Notify({ type: 'primary', message: '创建成功', duration: 1500, selector: '#notify-selector', background: '#28a745' });
        setTimeout(() => {
          wx.redirectTo({
            url: '/pages/personal/personal'
          })
        }, 2000);
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