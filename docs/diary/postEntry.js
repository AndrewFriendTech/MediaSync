import editor from 'tiny-cli-editor'
import * as fs from 'fs';
import beautify from 'json-beautify';

const filename = "diary.json"
editor("")
.on("submit", text =>{
    const data = fs.existsSync(filename)?
        JSON.parse(fs.readFileSync(filename,{encoding:"utf-8"})):[]
    data.push({
        body:text,
        timestamp: (new Date()).toString()
    })
    fs.writeFileSync(filename,beautify(data,null, 2, 80),{encoding:"utf-8"});
})