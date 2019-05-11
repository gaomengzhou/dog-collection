
export const http = function (url, data, method) {
  wx.showLoading({
    title: "加载中...",
  })

  method = method || "GET";
  return new Promise(function (resolve, reject) {
    wx.request({
      url, // 仅为示例，并非真实的接口地址
      data,
      method,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        resolve(res);
        wx.hideLoading();
        // wx.showToast({
        //   title: res.data.msg
        // });

      },
      fail(err) {
        reject(err);
        wx.hideLoading();
        wx.showToast({ title: "未知错误." })
      }
    })
  })
}