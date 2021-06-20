const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 3000;
const fs = require('fs');


//통합종목시세 다운로드 링크
//https://data.krx.co.kr/contents/MDC/main/downloadMenu.cmd?type=tot



const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};

app.use(cors(corsOptions));

app.get('/:id', (req, res) => {

    let data = require('./data/data_json.json');
    data = data["Sheet1"]

    let object = {};

    for (let i = 0; i < data.length; i++){
        if (data[i]["A"] == req.params.id){
            object = data[i];
            break;
        }
    }

    // res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(object))
    // res.send(object)
});


app.listen(port, () => {
    console.log("node js!")
})