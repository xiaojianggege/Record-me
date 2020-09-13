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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit(e) {
      console.log(e)
    }
  }
})
