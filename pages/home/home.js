// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true,
    arry: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    dataList: ['吃饭', '睡觉', '宵夜', '唱歌'],
    users: {
      username: 'gao',
      age: '17',
    },
    likeData: {
      liker: 'gaogao',
      count: '2019'
    }
  },

  paizhao(){
    console.log("sssss")
  },


  tryClick2(e) {
    wx.showActionSheet({
      itemList: this.data.dataList,
      success: (res) => {
        wx.showToast({
          title: `${this.data.dataList[res.tapIndex]}`,
        })
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },

  tryClick() {
    wx.showModal({
      title: '警告',
      content: '一条普通的信息警告,选择确认或者取消',
      cancelText: 'Shit',
      confirmText: 'Fuck',
      success(res) {
        if (res.confirm) {
          wx.showLoading({
            title: '加载中',
          })

          setTimeout(function() {
            wx.hideLoading()
          }, 2000)
          console.log('用户点击确定')
        } else if (res.cancel) {
          wx.showLoading({
            title: '网络异常',
          })

          setTimeout(function() {
            wx.hideLoading()
          }, 2000)
          console.log('用户点击取消')
        }
      }
    })
  },

  parent() {
    console.log("父元素触发")
    wx.showToast({
      title: '父元素触发',
    })
  },

  child1() {
    console.log('子元素1触发')
    wx.showToast({
      title: '子元素1触发',
    })
  },

  child2: () => {
    console.log('子元素2触发')
    wx.showToast({
      title: '子元素2触发',
    })
  },

  clickToshow() {
    this.setData({
      show: !this.data.show
    })
  },

  

  shuaxin() {
    // wx.startPullDownRefresh({
    //   success() {
    //     wx.showLoading({
    //       title: '下拉刷新中',
    //     })
    //   }
    // });



      wx.stopPullDownRefresh({
        success() {
          wx.showToast({
            title: '成功',
          })
        }
      })


  },

  qingdian() {
    wx.switchTab({
      url: '../mine/mine',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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