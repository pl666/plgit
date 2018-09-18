// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:"点击选择，记得勾选哦~"
  },

  //将所有参数放进obj中
  obj:{
     type:"sell"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //选择地址
  choseAdd(){
    wx.chooseLocation({
      success:(res)=>{
        this.setData({
          address: res.address
        })

        //将所有参数合并到obj上
        Object.assign(this.obj,{
          address:res.address,
          longitude:res.longitude,
          latitude:res.latitude,
        })
        console.log(this.obj)
      },
    })
  },

  //单选框的点击事件
  typeChange(e){
    console.log(e)
    this.obj.type=e.detail.value
    console.log(this.obj)
  },
  inputdec(e){
    this.obj.inputdec=e.detail.value
  },
  inputconcat(e){
    this.obj.inputconcat=e.detail.value
  },

  //将数据存进数据库
  save(){
    if(!this.data.inputdec){
      wx.showToast({
        title: '请您输入信息',
        icon: 'loading',
        duration: 2000,
        mask: true,
      })
      return
    }
    wx.request({
      url: 'http://localhost:3000/list',
      data: this.obj,
      header: { 'content-type': 'application/json' },
      method: 'POST',
      success:(res)=>{
        console.log(this.obj)
        this.setData({
          suc:true
        })
      },
    })
  },
  go(){
    wx.navigateBack({
      delta: 1,
    })
  }
})