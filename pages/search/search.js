// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[]
  },
  obj: {
    inputvalue: ''
  },
  search() {
    wx.request({
      url: 'http://localhost:3000/list',
      data: {
        q: this.obj.inputvalue
      },
      header: { 'content-type': 'application/json' },
      method: 'GET',
      success: (res) => {
        this.setData({
          list: res.data
        })

      }

    })
  },
  go(e){
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + e.currentTarget.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  input(e) {
    this.obj.inputvalue = e.detail.value;

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})