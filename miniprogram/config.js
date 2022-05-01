// *** 修改指引 *** //
// 只修改双引号内部的文字，不要修改没有双引号包裹的文字，否则会导致程序出错

module.exports = {
  // 科普页图片
  science_imgs: [
    "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/科普1.png",
    "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/科普2.png",
    "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/科普3.png",
    "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/科普4.png",
    "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/科普5.png"
  ],
  // 赞赏码图片
  reward_img: "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/赞赏码.jpg",
  // 新猫问卷图片
  feedback_wj_img: "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/新猫问卷.png",
  // 小程序菊花码图片
  mpcode_img: "cloud://hnu-9gt60bjnd5676331.686e-hnu-9gt60bjnd5676331-1308120594/系统/菊花码.jpg",

  // 首页banner广告
  ad_genealogy_banner: "adunit-1bb86578d6ae29b3",
  // 识猫banner广告
  ad_recognize_banner: "adunit-0b3ff00b86afabcf",
  // 打赏video广告
  ad_reward_video: "adunit-852d77fd388a9238",

  // 猫猫领养状态字符串，对应数据库cat.adopt中的数字下标
  cat_status_adopt: ["未领养", "已领养", "急需领养"],
  // 首页漂浮的领养Logo对应的状态
  cat_status_adopt_target: "急需领养",

  // 订阅消息的统一配置（只修改引号内的）
  msg: {
    //审核结果通知模板
    verify: {
      id: 'Uu4hI8vnClz_S7Ik07yd0kTsjCu53J3QZbTDW8Z67nM',
      map: {
        title: "thing2", // 标题
        content: "thing7", // 内容
        note: "thing17", // 备注
      }
    },
    // 提醒审核模版
    notifyVerify: {
      id: '5LHpJZpC7I0BjkkCfkjmtK0CXR1siiaQh-9oqly8mUE',
      map: {
        title: "thing2",
        number: "number5",
        time: "time6",
      }
    },
    // 提醒查看反馈模板
    notifyChkFeedback: {
      id: '5LHpJZpC7I0BjkkCfkjmtOum3TIJiDjjYFqQOlGTDws',
      map: {
        title: "thing2",
        number: "number5",
        time: "time3",
      }
    },
    // 反馈回复结果模板
    feedback: {
      id: 'y6qvdAhijwRkDfAJeWELZihNXyKMJ1tlb-NQ4OpB7Is',
      map: {
        title: "thing3", // 标题
        content: "thing5", // 内容
        time: "date4", // 时间
      }
    },
  },

  // 各种文字内容
  text: {
    // 小程序名
    app_name: "HNU喵汪图鉴",
    // 首页，pages/genealogy/genealogy
    genealogy: {
      share_tip: "发现身边校园猫咪",
      search_tip: "搜索猫猫名字或昵称",
      filter_tip: "点此进行筛选",
      new_photo_tip: "有新相片！",
      no_photo_tip: "暂无封面照片...",
      photo_by_tip: "📸 Photo by ",
      photo_by_unknow_tip: "匿名猫友",
      photo_loading_tip: "加载照片ing",
      to_star_tip: "返回喵星",
      missing_tip:"已失踪",
      adopt_btn: "只小猫",
    },
    // 关于页，pages/info/info
    info: {
      share_tip: "关于",
      slogan: "拍照记录校园内猫猫的成长轨迹",
    },
    // 猫猫详情页，pages/genealogy/detailCat/detailCat
    detail_cat: {
      bottom_text_loading: "LOADING...",
      bottom_text_end: "- THE END -",
      popularity_tip: "猫猫人气值",
      comment_tip: "猫猫留言数",
      button_feedback: "反馈猫猫信息",
      label_nickname: "昵称",
      label_location: "常驻地",
      label_birthday: "生日",
      label_father: "爸爸",
      label_mother: "妈妈",
      label_friend: "好友",
      label_son:"孩子",
      label_character: "性格及特点",
      label_tutorial: "撸猫指南",
      label_tutorial_empty: "暂时还没有",
      label_comment_board: "留言板",
      sterilized_true: "已绝育",
      sterilized_false: "待绝育",
    },
    // 提交反馈页，pages/genealogy/feedbackDetail/feedbackDetail
    feedback_detail: {
      feedback_title: "反馈内容",
      feedback_tip: "猫猫信息纠错、照片归属权、功能改进等~",
      input_length_tip: "字数",
      contract_title: "你的联系方式",
      contract_tip: "（选填）微信/QQ/邮箱",
      submit_button: "提交反馈",
      submit_tip: "*反馈内容仅后台工作人员可见",
    },
    // 提交留言页，pages/genealogy/commentBoard/commentBoard
    comment_board: {
      ban_tip: "如有误封请在\"关于-信息反馈\"中留言~",
      auth_tip: "授权后进行留言~",
      comment_tip: "发条友善的留言吧~"
    },
    // 添加照片，pages/genealogy/addPhoto/addPhoto
    add_photo: {
      auth_tip: "授权后进行上传~",
      uploading_tip: "正在上传...",
      success_tip_title: "上传成功！",
      success_tip_content: "审核后就会展示出来啦",
      unfinished_tip_title: "提示",
      unfinished_tip_content: "填写信息后再上传哦！",
    },
    // 赞赏页，pages/info/reward/reward
    reward: {
      share_tip: "打赏罐头",
      ad_success_tip: "多谢喵(ฅ'ω'ฅ)!",
      ad_fail_tip: "没播完喵...",
      reward_tip_title: "打赏罐头",
      reward_tip: "您的捐款及广告收入将用作猫猫救助，每月的收支都会在“HNU喵汪”公众号进行公开，感谢您对湖南大学流浪猫的帮助与支持！\n喵(^･ｪ･^)",
      reward_count_tip: "* 每月统计一次，在公众号公示，多谢晒（鞠躬）",
      reward_title: "爱心捐款",
    },
    // 排行页，pages/info/photoRank/photoRank
    photo_rank: {
      share_tip: "拍照月榜",
      auth_tip_title: "请授权查看自己的排名",
      auth_tip: "点击授权",
      count_tip: "* 定期自动更新"
    },
    // 反馈页，pages/info/feedback/feedback
    feedback: {
      share_tip: "信息反馈",
      feedback_tip_title: "留下反馈",
      feedback_tip: "每一条反馈我们都会认真看滴",
      new_cat_tip_title: "新的猫猫",
      new_cat_tip: "提交猫谱中没有的猫猫信息，给猫猫上户口~",
      contract_tip_title: "更多联系",
      contract_tip: "有关猫猫信息添加、小程序的建议、照片维权、猫猫领养咨询等事项，请关注HNU喵汪公众号后留言，或邮件：xfax@foxmail.com",
    },
    // 开发团队页，pages/info/devTeam/devTeam
    dev_team: {
      share_tip: "开发团队",
      team: "程序开发：中山大学：渔政、蓝卷、XD、zJ\n程序引进：2a.m.\n初期资料整理：2a.m.、晋不远、莫\n以及各校区、猫咖群的小伙伴~\n非常欢迎新朋友加入设计开发哇~！",
    },
    // 识猫页，pages/recognize/recognize
    recognize: {
      share_tip: "拍照识猫",
      select_tip: "你可以从相册选择猫猫照片\n或点击下方启用相机权限后直接拍照\n",
      select_btn: "启用相机权限",
      reselect_btn: "重新选图",
      no_cat_tip: "照片里好像没有猫猫",
      multi_cat_tip: "点击对应方框可以更改想识别的猫猫",
      no_cat_rec_tip: "看起来，整张照片更像...",
      single_cat_rec_tip: "看起来，这张照片里的猫猫更像...",
      multi_cat_rec_tip: "看起来，红色框框中的猫猫更像...",
      bottom_tip: "*目前仅拥有十张以上靓照（清晰正面、仅含一只）的猫猫才能被认到哦！多多上传帮忙改进识别效果吧~",
      ad_tip: "识别累了，帮忙点下广告喵（揉眼睛 ( '-ωก̀ )",
    },
    // 科普页，pages/science/science
    science: {
      share_tip: "科普",
    }
  }
}