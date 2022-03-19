//const cheerio = require('cheerio');
//const axios = require('axios');

const get = function (_id) {
    return dataResult.filter(x => x.id == _id);
}

const getAll = function () {

    return dataResult;
}

const dataResult = [
    {
        "id": "1",
        "category": "latest"
    },
    {
        "id": "2",
        "category": "covid"
    },
    {
        "id": "3",
        "category": "tampering"
    },
    {
        "id": "4",
        "category": "tech"
    },
    {
        "id": "5",
        "category": "racism"
    }
]

// async function getTeamData(url) {
//     return axios.get(url).then(response => response.data)
// }

// const getInternationalTeams = function () {
//     //let teams = [];

//     // getTeamData('https://www.espncricinfo.com/team')
//     //     .then(data => {
//     //         return data;
//     //     })
//     //     .catch(err => console.log(err))

//     // axios.get('https://www.espncricinfo.com/team')
//     //     .then((result) => {
//     //         const html = result.data;
//     //         const $ = cheerio.load(html);
//     //         $('div.teams-page-wrapper > div > div > div > div:nth-child(2) > div > div > a', html).each(function () {
//     //             let linkUrl = $(this).attr('href');
//     //             const name = $(this).find('h5').text();
//     //             const imageUrl = $(this).find('img').attr('src');

//     //             teams.push({
//     //                 name,
//     //                 linkUrl,
//     //                 imageUrl
//     //             });
//     //         });
//     //         console.log(teams);
//     //         return teams;
//     //     }).catch((err) => {
//     //         console.log(err);
//     //     });
//     // return teams;
// }

module.exports = {
    get,
    getAll
};