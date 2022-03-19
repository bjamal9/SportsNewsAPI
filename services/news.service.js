const cheerio = require('cheerio');
const axios = require('axios');

const baseUrl = 'https://www.espncricinfo.com/';

const get = async function (_categoryId, _pageNo) {
    let url = getUrl(_categoryId, _pageNo);
    const response = await getLatestNews(url, _pageNo);
    return response;
}

const getUrl = function (_categoryId, _pageNo) {
    let url = null;
    if (_categoryId === null || _categoryId === undefined || _categoryId < 1) {
        url = baseUrl + getRelativeUrlById(1);
    } else {
        url = baseUrl + getRelativeUrlById(_categoryId);
    }

    if (_pageNo !== null && _pageNo !== undefined && _pageNo > 1) {
        url = url + '?page=' + _pageNo;
    }

    return url;
}

const getRelativeUrlById = function (_id) {
    const urls = [
        {
            id: 1,
            url: '/latest-cricket-news'
        },
        {
            id: 2,
            url: '/subject/covid-19-324'
        },
        {
            id: 3,
            url: '/subject/ball-tampering-25'
        },
        {
            id: 4,
            url: '/subject/technology-in-cricket-18'
        },
        {
            id: 5,
            url: '/subject/racism-99'
        },
    ];

    let urlData = urls.find(x => x.id === Number.parseInt(_id));
    if (urlData !== null && urlData !== undefined) {
        return urlData.url;
    } else {
        return '/latest-cricket-news';
    }
}


const getLatestNews = async function (_url, _pageNo) {

    let newsData = [];
    let response = { pageNo: "1", totalRecords: "0", data: null };
    let totalRecords = 0;
    try {
        const resp = await axios.get(_url);
        const html = resp.data;
        const $ = cheerio.load(html);

        $('p.pagination-title', html).each(function () {
            totalRecords = $(this).text();
        });

        $('div.grid-news-info > a', html).each(function () {
            let linkUrl = $(this).attr('href');
            let imageUrl = $(this).find('img').attr('src');
            let title = $(this).find('span.story-title > span').text();
            let description = $(this).find('p.story-description > span').text();
            let postedOn = $(this).find('div.story-footer-container > span:nth-child(1)').text();
            let postedBy = $(this).find('span.story-info-byline').text();

            newsData.push({
                title,
                linkUrl: baseUrl + linkUrl,
                imageUrl,
                description,
                postedOn,
                postedBy
            });
        });

        if (_pageNo !== null && _pageNo !== undefined && _pageNo > 1) {
            response.pageNo = _pageNo;
        } else {
            response.pageNo = 1;
        }

        let records = totalRecords.trim().split(' ');
        response.totalRecords = records[records.length - 1];
        response.data = newsData;
        return response;

    } catch (err) {
        console.error(err);
    }

    return response;
}

module.exports = {
    get
};