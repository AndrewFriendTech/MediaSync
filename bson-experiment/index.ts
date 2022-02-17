import { serialize } from 'bson';
import express from 'express';


import {readFileSync,writeFileSync} from 'fs'

const port = 8000;
const app = express()

app.use(express.static("./"))

const object = {
    name:"my video",
    video: readFileSync("video2.mp4")
}

const bsonObject = serialize(object)
writeFileSync("video.bson",bsonObject)

app.listen(port,()=> console.log(`listening on port ${port}`))