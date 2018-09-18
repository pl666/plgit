var app = getApp(); //可以将设置的屏幕宽高传递过来的方法
Page({
    //地图小图标
  data:{
    markers: [],
    controls: [{
      id: 1,
      iconPath: '/resources/pin.png',
      position: {
        left: (app.globalData.windowWidth - 30) / 2, //将小图标定位到中央
        top: (app.globalData.windowHeight - 30) / 2 - 35,
        width: 30,
        height: 30
      },
      clickable: false
    },
      {
        id: 1,
        iconPath: '/resources/center.png',
        position: {
          left:40,
          top:app.globalData.windowHeight-120,
          width: 30,
          height: 30
        },
        clickable: true //可以设置点击事件
      }
      ]
      },
      //图标的点击事件
  controltap(){
    this.mapCtx.moveToLocation() //移到中心点
  },
  // 获取经纬度
  onShow() {
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude
        })
      }
    })
    wx.request({
      url: 'http://localhost:3000/list',
      header: { 'content-type': 'application/json' },
      method: 'GET',
      success: (res) => {
        console.log(res.data);
        let markers = res.data.map((item) => {
          return {
            iconPath: "/resources/" + item.type + ".png",
            id: item.id,
            latitude: item.latitude,
            longitude: item.longitude,
            width: 30,
            height: 30
          }
        })
        this.setData({
          markers: markers
        })
      }
    })
  },
//设置回到中心点
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },
  //设置转发
  onShareAppMessage: function (res) {
    return {
      title: '交易平台',
      path: '/pages/index/index'
    }
  },
  //跳转到发布页
  go(){
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  },
  //跳转到搜索
  go1() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },

  //跳转到详情
  markertap(e) {
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.markerId
    })
  },
})
