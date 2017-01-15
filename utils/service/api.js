const demon = 'https://www.moguiweb.com.cn';

const base_article_api = demon + '/api/article';

const article_api = {
    page: base_article_api + '/page',
    info: base_article_api + '/info'
};

export default { article_api: article_api };