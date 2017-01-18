
import apis from "./api.js";

class ArticleService {
    constructor() {
        this.aritcleAPI = apis.aritcleAPI;
    }
    //分页数据
    getPage(category, index, size, complete) {

        let promise = new Promise((resolve, reject) => {
            wx.request({
                url: `${this.aritcleAPI.page}/${category || 0}/${index || 0}/${size || 0}`,
                method: 'GET',
                success: function (res) {
                    // success 
                    resolve(res);
                },
                fail: function () {
                    reject();
                },
                complete: function () {
                    // complete
                    complete && complete();
                }
            })
        })

        return promise;
    }
    //获取详细信息
    getInfo(_id, complete) {
        let promise = new Promise((resolve, reject) => {
            wx.request({
                url: `${this.aritcleAPI.info}/${_id}`,
                method: 'GET',
                success: function (res) {
                    // success
                    resolve(res);
                },
                fail: function (err) {
                    // fail
                    reject(err);
                },
                complete: function () {
                    complete && complete();
                }
            })
        })

        return promise;
    }

}

export default new ArticleService();

