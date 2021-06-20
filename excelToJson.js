const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

const result = excelToJson({
	sourceFile: './data/data_0820_20210620.xlsx'
});

const data = JSON.stringify(result)
fs.writeFileSync('./data/data_json.json', data)

