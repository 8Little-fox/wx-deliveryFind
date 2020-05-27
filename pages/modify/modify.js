// pages/modify/modify.js
Page({
  data: {
    username:'琳媚儿',
    gender:'女'
  },
  onLoad:function(options){
   this.setData({
    //  收到数据后使用 decodeURIComponent()解码
    username:decodeURIComponent(options.username),
    gender:decodeURIComponent(options.gender)
   })
  },
  formsubmit:function(e){
    // 表单返回的所有数据
    var formData=e.detail.value
    // 获取上一个页面的对像
    var pages =getCurrentPages()
    var prevPage=pages[pages.length-2]
    // 调用上一个界面的setData() 方法，把数据存到上一个页面中
    prevPage.setData({
      username:formData.username,
      gender:formData.gender
    })
    // 返回到上一个界面
    wx.navigateBack()
    console.log(e.detail.value)
  }
})