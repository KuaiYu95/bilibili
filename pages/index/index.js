Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击导航页的菜单索引
    currentIndexNav: 0,
    // 首页导航数据
    navList: [],
    // 轮播图数据
    swiperList: [],
    // 视频列表数据
    videosList: [],
  },

  /**
   * 获取首页导航数据
   */
  getNavList() {
    let _this = this
    // 利用小程序内置发送请求方法
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList',
      success(res) {
        const {code, data} = res.data
        // code为0，请求发送成功
        if (code === 0) {
          _this.setData({
            navList: data.navList,
          })
        }

      }
    })
  },
  /**
   * 切换首页导航选中样式
   */
  activeNav(e) {
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList() {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        const {data, code} = res.data
        if (code === 0) {
          _this.setData({
            swiperList: data.swiperList
          })
        }
      }
    })
  },
  /**
   * 获取视频列表数据
   */
  getVideosList() {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res) {
        const { data, code } = res.data
        if (code === 0) {
          _this.setData({
            videosList: data.videosList
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取首页导航数据
    this.getNavList()
    // 获取轮播图数据
    this.getSwiperList()
    // 获取视频列表数据
    this.getVideosList()
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