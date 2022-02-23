import { serialize } from 'bson';
import * as express from 'express';
import { Video } from '../client/src/Video';


import {readFileSync,writeFileSync} from 'fs'

const port = 8000;
const app = express.default()


const object:Video = {
    name:"my video",
    video: readFileSync("video2.mp4").toString("base64")
}


app.get("/video.json",(req,res)=>{
    res.send(object)
})
app.use(express.static("./client/dist"))


app.listen(port,()=> console.log(`listening on port ${port}`))