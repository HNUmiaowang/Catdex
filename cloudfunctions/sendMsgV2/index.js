// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({
    env: 'hnu-9gt60bjnd5676331'
  });
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
    if (event.deploy_test === true) {
      // 进行部署检查
      return;
    }
    try {
        const result = await cloud.openapi.subscribeMessage.send({
            touser: event.touser,
            data: event.data,
            templateId: event.templateId,
            page: event.page
        });
        return result;
    } catch (err) {
        return err;
    }
}