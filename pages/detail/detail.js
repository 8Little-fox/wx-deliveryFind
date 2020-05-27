// pages/detail/detail.js
Page({
  data: {
    gender:'女',
    username:'琳媚儿',
    imgUrl:'../img/header.jpg'
  },
  chaneImg:function(){
    // 从本地相册选择图片或使用相机拍照
    wx.chooseImage({
      count:1,
      sizeType:['original',"compressed"],
      sourceType:['album','camera'],
      success:res=>{
        // tempFilePaths可以作为img标签的src属性
        var tempFilePaths=res.tempFilePaths
        this.setData({
          imgUrl:tempFilePaths
        })
      }
    })
  },
  jump:function(e){
    // 跳转到个人资料修改页
    //为了避免用户名的特殊字符破环字符串结构，使用encodeURIComponent（）编码
    wx.navigateTo({
      url: '/pages/modify/modify?username='+encodeURIComponent(this.data.username)+'&gender='+encodeURIComponent(this.data.gender),

    })
  }
})