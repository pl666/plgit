App({
  onLaunch: function () {
 //获取屏幕的宽高
 var res = wx.getSystemInfoSync()
    console.log(res)
    this.globalData.windowWidth = res.windowWidth
    this.globalData.windowHeight=  res.windowHeight
  },
  globalData: {
    userInfo: null
  }
})