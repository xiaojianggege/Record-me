
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    content: {
      type: String,
      default: '快去添加第一条记录吧'
    },
    imgs: {
      type: Array,
    },
    createTime: {
      type: String
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    month: '',
    day: '',
  },
  lifetimes: {
    attached: function () {
      this.setData({
        month:this.data.createTime.substring(5,7)+'月',
        day:this.data.createTime.substring(8,10)
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onClick() {
      this.triggerEvent('deleteNote')  //抛出方法
    },
  }
})
