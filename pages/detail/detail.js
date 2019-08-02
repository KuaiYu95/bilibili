// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoInfo: null,
    othersList: [],
    commentData: null,
  },

  /**
   * 根据视频id获取视频详情
   */
  getCurrentVideo(videoId) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id=' + videoId,
      success(res) {
        const { code, data } = res.data
        if (code === 0) {
          const { videoInfo } = data
          _this.setData({ videoInfo })
        }
      }
    })
  },

  /**
   * 获取推荐视频
   * @param {*} options 
   */
  getOthersList(videoId) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id=' + videoId,
      success(res) {
        const { code, data } = res.data
        if (code === 0) {
          const { othersList } = data
          _this.setData({ othersList })
        }
      }
    })
  },

  /**
   * 获取评论列表
   * @param {*} options 
   */
   getCommentsList(videoId) {
    let _this = this
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id=' + videoId,
      success(res) {
        const { code, data } = res.data
        if (code === 0) {
          const { commentData } = data
          _this.setData({ commentData })
        }
      }
    })
   },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let videoId = options.id
    this.getCurrentVideo(videoId)
    this.getOthersList(videoId)
    this.getCommentsList(videoId)
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