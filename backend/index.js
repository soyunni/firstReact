const express = require('express');
const app = express();
const cors = require('cors'); //크로스 도메인 설정
app.use(cors()); //크로스 도메인 허용

const dataList =[
    {
        "id": 1,
        "title": "Flowey",
        "content": "only 5 inches",
        "price": "120,000",
        "img": "https://codingapple1.github.io/shop/shoes1.jpg"
    },
    {
        "id": 2,
        "title": "Baby shoes",
        "content": "for less than 6",
        "price": "100,000",
        "img": "https://codingapple1.github.io/shop/shoes2.jpg"
    },
    {
        "id": 3,
        "title": "Red Herring",
        "content": "Born in France",
        "price": "99,000",
        "img": "https://codingapple1.github.io/shop/shoes3.jpg"
    }
];
app.get('/', function(req, res) {
    res.json({"result": "success"});
});

app.get('/detail/list', function(req, res) {
    let page = req.query.page;
    let addList = []
    if (page) {
        addList = [
            {
                "id": 4,
                "title": "Flowey",
                "content": "only 5 inches",
                "price": 120000,
                "img": "https://codingapple1.github.io/shop/shoes4.jpg"
            },
            {
                "id": 5,
                "title": "Baby shoes",
                "content": "for less than 6",
                "price": 120000,
                "img": "https://codingapple1.github.io/shop/shoes5.jpg"
            },
            {
                "id": 6,
                "title": "Red Herring",
                "content": "Born in France",
                "price": 120000,
                "img": "https://codingapple1.github.io/shop/shoes6.jpg"
            }
        ]
    } else {
        addList = dataList;
    }
    res.json({"result": "success", "list": addList});
});

app.get('/detail/:id', function(req, res) {
    let id = Number(req.params.id);
    let shoes = dataList.find(data => data.id === id);
    res.json({"result": "success", "data": shoes});
});

let server = app.listen(11000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server is working : PORT - ',port);
});

