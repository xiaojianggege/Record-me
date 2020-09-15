// miniprogram/pages/personal/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '我的',
    sectionInfo: [
      { iconUrl: '../../images/意见建议 (1).png', title: '意见建议'},
      { iconUrl: '../../images/问题反馈.png', title: '问题反馈'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  gotoSuggestion(){
    wx.navigateTo({
      url: '../suggestion/suggestion',
    })
  },
  commitSuggestion(e){
    console.log(e);
    
   const db = wx.cloud.database();
    // var that = this;
    // db.collection('suggest').where({
    //   _openid: 'user-open-id',
    // })
    //   .get({
    //     success: function (res) {
    //       // res.data 是包含以上定义的两条记录的数组
    //       console.log(res.data)
    //       data = res.data

    //       console.log(data[0].list.name)
    //       that.setData({
    //         newlist: data,
    //       })
    //     }
    //   })
    db.collection('suggest').add({
      data:{

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