// pages/Person/person.js
Page({
  data: {

  },
  info:function(e){
    wx.navigateTo({
      url: '../detail/detail',
    })
  },
  order:function(e){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  address:function(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  contact:function(){
   wx.makePhoneCall({
     phoneNumber: '400-321',
   })
  }
})