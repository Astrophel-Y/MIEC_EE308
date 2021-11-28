// pages/members/index.js

const App = getApp();
Page({
  


  /**
   * 页面的初始数据
   */
  data: {
      currentIndex:0
  },
  changeCurrentIndex:function(e){
      this.setData({
          currentIndex:e.currentTarget.id
      })
  },
  data: {
    // 自定义顶部导航
    navHeight: App.globalData.navHeight,
    navTop: App.globalData.navTop,
  },
  goBack() {
    let pages = getCurrentPages();   //获取小程序页面栈
    let beforePage = pages[pages.length - 2];  //获取上个页面的实例对象
    wx.navigateBack({         //返回上一页  
      delta: 1
    })
  },
  data: {
    contentList: [[ 1, 2, 3, 4, ], ["Astrophel", "hs1215", "Siesta123456", "Yongji-Nan"], ["Owner", "member", "member", "member"], ["1 team", "1 team", "1 team", "1 team"]],
    isShowAll:false
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