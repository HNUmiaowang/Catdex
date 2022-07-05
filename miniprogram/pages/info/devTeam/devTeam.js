// miniprogram/pages/info/devTeam/devTeam.js
const config = require('../../../config.js');
const text_cfg = config.text;
const share_text = text_cfg.app_name + ' - ' + text_cfg.info.share_tip;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_cfg: text_cfg,
    github_link1: "https://github.com/sysucats/zhongdamaopu",
    github_link2:"https://github.com/SCCAPKU/miniprogram",
    update_log: [{
            version: "v1.4.0",
            content: [
              "每日喵闻上线啦",
            ],
            time: "2022/06/30"
          },{
        version: "v1.3.5",
        content: [
          "可在猫咪详情页提交领养申请",
          "可通过联系客服的方式进行领养交流",
        ],
        time: "2022/05/21"
      }, {
      version: "v1.3.4",
      content: [
        "修复拍照月榜信息获取问题",
        "猫咪详情页操作调整",
      ],
      time: "2022/05/19"
    }, {
      version: "v1.3.3",
      content: [
        "部署、管理流程优化",
      ],
      time: "2022/05/15"
    }, {
        version: "v1.3.2",
        content: [
          "猫猫详情页可以给照片点赞了",
        ],
        time: "2022/04/30"
      },{
      version: "v1.3.1",
      content: [
        "处理照片压缩和水印图问题",
        "处理.HECI图像显示问题",
      ],
      time: "2022/04/11"
    },{
      version: "v1.3.0",
        content: [
          "新增图鉴识猫",
          "修复二维码跳转问题",
          "修复cat._no可能冲突问题",
        ],
        time: "2022/04/09"
      },
      {
        version: "v1.2.2",
        content: [
          "修复并整理消息订阅配置",
          "重新设计猫猫详情的大图页面",
        ],
        time: "2022/02/22"
      },
      {
        version: "v1.2.1",
        content: [
          "修复输入框UI问题",
          "首页的新照片提示可以消除啦",
          "照片管理可以只显示精选",
        ],
        time: "2022/02/21"
      },
      {
        version: "v1.2.0",
        content: [
          "新增猫猫留言板",
        ],
        time: "2022/02/21"
      },
      
      {
        version: "v1.1.2",
        content: [
          "增加领养状态标签",
          "过滤器修复优化并增加提示",
          "其他UI改进升级",
        ],
        time: "2021/12/15"
      },
      {
        version: "v1.1.1",
        content: [
          "反馈系统改进",
          "其他UI改进和接口升级",
        ],
        time: "2021/11/27"
      },
      {
        version: "v1.1.0",
        content: [
          "人气值与照片数量有关啦",
          "增加看广告打赏方式",
          "长按协会logo可弹出小程序码",
        ],
        time: "2021/11/23"
      },
      {
        version: "v1.0.0",
        content: [
          "HNU喵汪图鉴上线",
        ],
        time: "2021/11/12"
      },
    ]

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
    return {
      title: share_text
    }
  },

  copyOpenSourceLink1: function () {
    wx.setClipboardData({
      data: this.data.github_link1,
    });
  },
  copyOpenSourceLink2: function () {
    wx.setClipboardData({
      data: this.data.github_link2,
    });
  }
})