// pages/order/order.js
Page({
  data: {
      no:null,  //运单号
      company:['shunfeng','shentong','yuantong','yunda','zhongtong'],//传递给快递查询接口的值
      com:['顺丰','申通','圆通','韵达','中通'],  //用于显示在界面中的快递名称
      index:0,  //选择快递公司的数组引索
      expressInfo:null   //查询到的物流信息
  },
  //获取快递公司的引索
  companyInput:function(e){
    this.setData({
      index:e.detail.value,     
    })
  },
  //获取快递单号的值
  noInput:function(e){
    // console.log(e.detail.value)
    this.setData({
      no:e.detail.value
    })
  },

  search:function(){
    // 显示loading提示框
    wx.showLoading({
      title: '加载中',
    })
    wx.request({
      url: 'http://api.tianapi.com/txapi/kuaidi/index',
      method:'GET',
      data:{
        key:'c309488543f7b96b208d91d2414234ba',
        number:this.data.no,  //快递单号
        company:this.data.company[this.data.index]    //快递公司
      },
      success:res=>{
        console.log(res.data);
        this.setData({
          expressInfo:res.data
        })
        wx.hideLoading()
      }
    })
  }

})