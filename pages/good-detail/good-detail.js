// pages/good-detail/good-detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);

    wx.setNavigationBarTitle({
      title: options.title
    })

    http("https://api.apishop.net/common/dogFamily/queryDogListByKeyword?apiKey=fjidkhv8da8252fb09984ee236efcd993c49d78b1b6e152&keyword&pageSize=141", {
      petID: options.goodId
    }).then(res => {
      console.log(res.data.result.petFamilyList)
      this.setData({
        good: res.data.result.petFamilyList
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})