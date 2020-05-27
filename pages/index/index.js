//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  changeImage:function(){
    wx.reLaunch({
      url: '/pages/Person/person',
    })
  }
})
