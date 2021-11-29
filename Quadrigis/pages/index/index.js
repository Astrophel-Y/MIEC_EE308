// index.js
// 获取应用实例
const app = getApp()
const repoInfo = require('../../js/repo-info.js')

Page({
  behaviors: [repoInfo],
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    repoFilter:["All","Public","Private","Sources","Forks","Archived","Mirrors"],
    order:["Last Updated","Name","Stars"]
  },
  // 事件处理函数
  viewRepo() {
    wx.navigateTo({
      url: '../index/repository/codes'
    })
  },
  getComponent: function () {
    const comp = this.selectComponent('.pulldown');
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    this.getComponent.selectData=['1','2'];
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})
