const express = require('express');
const app = express();
const port = process.env.port || 3000;
const fs = require('fs');

//통합종목시세 다운로드 링크
//https://data.krx.co.kr/contents/MDC/main/downloadMenu.cmd?type=tot

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

    res.json(object)
});


app.listen(port, () => {
    console.log("node js!")
})