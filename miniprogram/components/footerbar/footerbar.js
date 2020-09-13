// components/footerbar/footerbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShowOne: true,
    isShowTwo: false,
    personalUrlActive: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoIndex() {
      this.setData({
        isShowOne: true,
        personalUrlActive: false
      })
      wx.redirectTo({
        url: '/pages/index/index'
      })

    },
    gotoNote() {
      wx.redirectTo({
        url: '/pages/note/note'
      })
    },
    gotoRecord() {
      wx.redirectTo({
        url: '/pages/record/record'
      })
    },
    gotoMine() {
      wx.redirectTo({
        url: '/pages/mine/mine'
      })
    },
    handleActiveOne() {
     
    },
    handleActiveTwo() {
      this.setData({
        isShowOne: false,
        isShowTwo: true,
        personalUrlActive: false

      })
    },
    handleActiveThree() {
      this.setData({
        isShowOne: false,
        isShowTwo: false,
        personalUrlActive: true
      })
    }
  }
})
