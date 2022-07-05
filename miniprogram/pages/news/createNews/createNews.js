// pages/manage/manageNews/createNews/createNews.js
const utils = require('../../../utils.js');
const user = require('../../../user.js');
const generateUUID = utils.generateUUID;
const isManager = utils.isManager;

const getCurUserInfoOrFalse = user.getCurUserInfoOrFalse;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isAuth: false,
        auth: false,
        user: {},
        news_id: 0,
        namelength: 0,
        namemaxlength: 30,
        titlelength: 0,
        titlemaxlength: 30,
        length: 0,
        maxlength: 800,
        photos: [],
        photos_path: [],
        cover: 0,
        cover_path: "",
        uploading: false,
        buttons: [{
            id: 0,
            name: '领养',
            checked: false,
        }, {
            id: 1,
            name: '救助',
            checked: false,
        }, {
            id: 2,
            name: '活动',
            checked: false,
        }, {
            id: 3,
            name: '其他',
            checked: true,
        }],
        modalButtons: [{
            id: 0,
            name: '否',
            checked: true,
        }, {
            id: 1,
            name: '是',
            checked: false,
        }],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.checkAuth();
    },

    // 检查权限
    checkAuth() {
        const that = this;
        isManager(function (res) {
            if (res) {
                that.setData({
                    auth: true
                });
            }
        }, 2)
    },

    bindInputName(e) {
        var inputData = e.detail.value;
        this.setData({
            namelength: inputData.length
        })
    },

    bindInputTitle(e) {
        var inputData = e.detail.value;
        this.setData({
            titlelength: inputData.length
        })
    },

    bindInput(e) {
        var inputData = e.detail.value;
        this.setData({
            length: inputData.length
        })
    },

    getUInfo() {
        const that = this;
        getCurUserInfoOrFalse().then(res => {
            if (!res) {
                console.log('未授权');
                return;
            }
            console.log(res);
            that.setData({
                isAuth: true,
                user: res,
            });
        });
    },

    chooseImg(e) {
        const that = this;
        if (this.data.photos.length == 9) {
            wx.showToast({
                title: '已满九张',
                icon: 'error',
                duration: 1000
            });
            return;
        }
        wx.chooseImage({
            count: 9 - that.data.photos.length,
            sizeType: ["compressed"],
            success: (res) => {
                console.log(res);
                var photos = that.data.photos;
                for (const file of res.tempFiles) {
                    photos.push({
                        file: file
                    });
                }
                this.setData({
                    photos: photos
                });
            },
        })
        console.log("Photos: ", that.data.photos);
    },

    deleteImg(event) {
        let that = this;
        wx.showModal({
            content: '确定要删除吗？',
            success: function (sm) {
                if (sm.confirm) {
                    let idx = event.currentTarget.dataset.index;
                    that.data.photos.splice(idx, 1)
                    that.setData({
                        photos: that.data.photos,
                    })
                }
            }
        })
    },

    previewImg: function (event) {
        console.log(event);
        wx.previewImage({
            urls: [event.currentTarget.dataset.url]
        })
    },

    chooseCover(e) {
        const that = this;
        if (this.data.cover != 0) {
            wx.showToast({
                title: '只能选择一张封面',
                icon: 'error',
                duration: 1000
            });
            return;
        }
        wx.chooseImage({
            count: 1,
            sizeType: ["compressed"],
            success: (res) => {
                console.log(res);
                for (const file of res.tempFiles) {
                    that.setData({
                        cover: file
                    });
                }
            },
        })
        console.log("Cover: ", that.data.photos);
    },

    deleteCover(event) {
        let that = this;
        wx.showModal({
            content: '确定要删除吗？',
            success: function (sm) {
                if (sm.confirm) {
                    that.setData({
                        cover: 0,
                    })
                }
            }
        })
    },

    async uploadAllImg() {
        const photos = this.data.photos;
        if (photos.length == 0) {
            return;
        }

        for (let i = 0; i < photos.length; ++i) {
            wx.showLoading({
                title: '正在上传(' + (photos.length - i) + ')',
                mask: true,
            });
            await this.uploadImg(photos[i], 0);
        }

        this.setData({
            uploading: false,
            photos: [],
        })

        wx.hideLoading();
    },

    async uploadCover() {
        const photo = this.data.cover;
        if (photo == 0) {
            return;
        }

        wx.showLoading({
            title: '正在上传封面',
            mask: true,
        });
        await this.uploadImg(photo, 1);

        this.setData({
            uploading: false,
            cover: 0,
        })

        wx.hideLoading();
    },

    async uploadImg(photo, type) { // type = 0 时上传图片 = 1 时上传封面
        this.setData({
            uploading: true,
        });

        var tempFilePath;
        if (type == 1) {
            tempFilePath = photo.path;
        } else {
            tempFilePath = photo.file.path;
        }
        //获取后缀
        const index = tempFilePath.lastIndexOf(".");
        const ext = tempFilePath.substr(index + 1);

        let upRes = await wx.cloud.uploadFile({
            cloudPath: 'news' + '/' + generateUUID() + '.' + ext, // 上传至云端的路径
            filePath: tempFilePath, // 小程序临时文件路径
        });

        // 返回文件 ID
        if (type == 0) { // 上传普通图片，更新路径 photos_path
            this.data.photos_path.push(upRes.fileID);
            this.setData({
                photos_path: this.data.photos_path
            });
        } else { // 上传封面，更新路径 cover_path
            this.setData({
                cover_path: upRes.fileID
            });
        }
        console.log("File Path: ", upRes.fileID);
    },

    radioButtonTap: function (e) {
        console.log("Radio Button Tap: ", e);
        let id = e.currentTarget.dataset.id;
        console.log(id);
        for (let i = 0; i < this.data.buttons.length; i++) {
            if (this.data.buttons[i].id == id) {
                this.data.buttons[i].checked = true;
            } else {
                this.data.buttons[i].checked = false;
            }
        }
        this.setData({
            buttons: this.data.buttons
        })
    },

    radioModalButtonTap: function (e) {
        let id = e.currentTarget.dataset.id;
        var mb = this.data.modalButtons;
        for (let i = 0; i < mb.length; i++) {
            if (mb[i].id == id) {
                mb[i].checked = true;
            } else {
                mb[i].checked = false;
            }
        }
        this.setData({
            modalButtons: mb
        });
    },

    async bindSubmit(e) {
        var submitData = e.detail.value;
        const that = this;
        console.log(submitData);
        if (!submitData.title) {
            wx.showToast({
                title: '请填写标题后再发布哦',
                icon: 'none'
            })
            return;
        }

        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var min = date.getMinutes();
        var date_str = year.toString() + "-" +
            (month < 10 ? "0" + month.toString() : month.toString()) + "-" +
            (day < 10 ? "0" + day.toString() : day.toString()) + " " +
            (hour < 10 ? "0" + hour.toString() : hour.toString()) + ":" +
            (min < 10 ? "0" + min.toString() : min.toString());


        // 上传图片
        await this.uploadCover();
        await this.uploadAllImg();

        var classBelongto = "";
        for (let i = 0; i < this.data.buttons.length; i++) {
            if (this.data.buttons[i].checked == true) {
                classBelongto = this.data.buttons[i].name;
            }
        }

        var setNewsModal = false;
        if (this.data.modalButtons[1].checked == true) {
            setNewsModal = true;
        }

        var data = {
            userInfo: that.data.user.userInfo,
            userNickname: submitData.name,
            date: date,
            ddate: date_str,
            title: submitData.title,
            mainContent: submitData.mainContent,
            coverPath: that.data.cover_path,
            photosPath: that.data.photos_path,
            class: classBelongto,
            setNewsModal: setNewsModal
        };

        const db = wx.cloud.database();
        db.collection('news').add({
            data: data,
            success: (res) => {
                console.log(res);
                that.setData({
                    news_id: res._id
                })
            },
            fail: console.error
        })


        wx.showToast({
            title: '发布成功',
            icon: 'success',
            duration: 1000
        });
        setTimeout(wx.navigateBack, 1000);
    }
})