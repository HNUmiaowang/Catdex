//app.js
import { checkUpdateVersion } from "./utils";

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      try {
        wx.cloud.init({
            env: 'hnu-9gt60bjnd5676331',
            traceUser: true,
        });
      } catch (error) {
        console.error(error);
      }
    }

    // 检查版本
    checkUpdateVersion();

    this.globalData = {
      version: "v1.4.0"
    }
  }
})
