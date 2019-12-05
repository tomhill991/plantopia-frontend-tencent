// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */


  

  // goToFavorite: funtion() {},
  onLoad: function (options) {
    let page = this;
   console.log("options from show page",options)
    wx.request({
      // url: `https://plantopia.wogengapp.cn/api/v1/plant_libraries/${options.id}`,
      url: `http://localhost:3000/api/v1/plant_libraries/${options.id}`,
      method: 'GET',
      success(res) {
        console.log("pll",res)
        const plant = res.data;
        page.setData(
          plant
        );
        wx.hideToast();
      }
    });
  },
  goToAdd: function (event) {
    let id = event.currentTarget.dataset.id;
    console.log("id", id)
    wx.navigateTo({
      url: `/pages/add/add?id=${id}`,
    })
  },
  // goToFav: function(event) {
  //   let page = this;
  //   let id = event.currentTarget.dataset.id
  //   console.log("fav", id)
  //   wx.request({
  //     url: `https://localhost:3000/api/v1/plant_libraries/${id}`,
  //     method: 'GET',
  //     success(res) {
  //       console.log("pll", res)
  //       const plant = res.data;
  //       page.setData(
  //         plant
  //       );
  // },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})