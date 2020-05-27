// pages/address/address.js
Page({
  data: {
    addressInfo:null
  },
  chooseAddress:function(){
    wx.chooseAddress({
      // 成功之后，把所有数据放在addressInfo里，在wxml中调用
     success:res=>{
       this.setData({
         addressInfo:res
       })
     },
     fail:err=>{
       console.log(err)
     }
    })
  }
})