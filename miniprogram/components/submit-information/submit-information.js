// components/submit-information/submit-information.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ''
    },
    showSticky: {
      type: Boolean,
      value: false
    },
    showClamp: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content: ''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit(e) {
      const db = wx.cloud.database();
      db.collection('suggest').add({
        data: {
          content: this.data.content
        }
      }).then(res=>{
        console.log(res);
        
      })

    },
    contentInput(e) {
      this.setData({
        content: e.detail.value
      })
    }
  }
})
