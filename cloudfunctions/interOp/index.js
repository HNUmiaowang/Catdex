// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: 'hnu-9gt60bjnd5676331'
});
const db = cloud.database();
const _ = db.command;

async function like_add(item_type, item_id) {
  return await db.collection(item_type).doc(item_id).update({
    data: {
      like_count: _.inc(1),
    }
  });
}

// 云函数入口函数
exports.main = async (event, context) => {
  const type = event.type;

  if (type == "like_add") {
    const item_type = event.item_type;
    const item_id = event.item_id;
    return like_add(item_type, item_id);
  }

  return `unk type ${type}`
}