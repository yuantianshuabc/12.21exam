//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   data:[]
  },
  onShow(){
    wx.request({
      url: 'http://www.think.com/articles/index/',
      method:"GET",
      success:(data)=>{
        // console.log(data)
        this.setData({
          data:data.data.data
        })
      }
    })
  },
  shoucang(evt){
    let id = evt.target.dataset.id;
    wx.request({
      url: 'http://www.think.com/articles/index/shoucang',
      data:{
        id:id
      },
      success:(data)=>{
        if(data.data.code == 200){
          wx.showToast({
            title: '收藏成功',
          })
          this.setData({
            data:data.data.data
          })
        }
        
      }
    })
  }
})
