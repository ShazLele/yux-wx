const demon = 'https://www.moguiweb.com.cn';
// const local_demon = 'https://172.22.100.177';
const base_article_api = demon + '/api/article';
const base_user_api = demon + '/api/user';
const aritcleAPI = {
    page: base_article_api + '/page',
    info: base_article_api + '/info'
};
const userAPI = {
    login: base_user_api + '/login', 
    wxLogin:base_user_api+'/wx/login',
    register: base_user_api + '/register',
    logout: base_user_api + '/logout'
};

export default { aritcleAPI: aritcleAPI, userAPI: userAPI };