# wx-deliveryFind
小程序快递查询

`tabBar` 实现页面跳转
```
"tabBar": {
    "color": "#333",
    "selectedColor": "#f7982a",
    "backgroundColor": "#f6f6f6",
    "borderStyle": "white",
    "list": [{
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/pages/img/首页1.png",
        "selectedIconPath": "/pages/img/首页.png"
      },
      {
        "pagePath": "pages/Person/person",
        "text": "个人中心",
        "iconPath": "/pages/img/user.png",
        "selectedIconPath": "/pages/img/user1.png"
      }
    ]
  },
```

# 页面跳转：关闭所有页面，打开到应用内的某个页面
```
wx.reLaunch({
      url: '/pages/Person/person',
    })
```

保留当前页面，跳转到应用内的某个页面。但是不能跳到 tabbar 页面。使用 wx.navigateBack 可以返回到原页面。
```
 wx.navigateTo({
      url: '../detail/detail',
    })
    
 wx.navigateBack()  返回上一个页面
```

# 拨打电话
 ```
 wx.makePhoneCall({
     phoneNumber: '400-321',
   })
 ```
 
 # 从本地相册选择图片或使用相机拍照
 ```
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
 ```
 
 # 为了避免用户名的特殊字符破环字符串结构，使用encodeURIComponent（）编码
 ```
   url: '/pages/modify/modify?username='+encodeURIComponent(this.data.username)+'&gender='+encodeURIComponent(this.data.gender),
 ```
 显示loading提示框
 ```
   wx.showLoading({
      title: '加载中',
    })
    
   wx.hideLoading()
 ```
 
 #  获取地址 成功之后，把所有数据放在addressInfo里，在wxml中调用
 ```
 data: {
    addressInfo:null
  },
  
  
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
 ```
