// pages/classfiy/classfiy.js
import {
  http
} from "../../utils/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    starIndex: 0,
    goods:[],
  },

  onChange1(e) {
    const index = e.detail.index;
    this.setData({
      'starIndex': index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    http("https://api.apishop.net/common/dogFamily/queryDogListByKeyword?apiKey=fjidkhv8da8252fb09984ee236efcd993c49d78b1b6e152&keyword&pageSize=141", {})
      .then(res => {
        this.setData({
          goods: res.data.result.petFamilyList,
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

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