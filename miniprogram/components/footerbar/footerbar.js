
const app = getApp();
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
    navId: 3
  },
  lifetimes: {
    attached: function () {
      this.setData({
        navId: app.globalData.navId
      })
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    gotoIndex() {
      app.globalData.navId = 0
      wx.redirectTo({
        url: '/pages/index/index'
      })
    },
    gotoNote() {
      app.globalData.navId = 1
      wx.redirectTo({
        url: '/pages/note/note'
      })
    },
    gotoRecord() {
      app.globalData.navId = 2
      wx.redirectTo({
        url: '/pages/record/record'
      })
    },
    gotoPersonal() {
      app.globalData.navId = 3
      wx.redirectTo({
        url: '/pages/personal/personal'
      })
    },
    gotoAdd(){
      if(app.globalData.navId==2){
        wx.navigateTo({
          url: '/pages/essay/essay',
        })
      }else{
        wx.navigateTo({
          url: '/pages/commitDynamic/commitDynamic',
        }) 
      }
    }
  }
})
