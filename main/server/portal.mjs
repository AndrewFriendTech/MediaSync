import express from "express";
import morgan from "morgan";
import {existsSync,readFile,readdirSync, fstat, writeFileSync} from 'fs';
import { writeFile } from "fs/promises";
import {createServer} from 'http';

import { Video } from "./classes/Video.js";
import { cwd, stdout } from "process";
import { Timer} from 'timer-node';
import { attachStaticRouter } from "./lib/staticRouter.js";
import { getUniqueFileName } from "./lib/checkInFiles.js"
import { escapeSlashes } from "./lib/escapeSlashes.js";
import { spawn } from "child_process";
const videoTimer = new Timer()


const app = express()
const httpServer = createServer(app);




const port = process.env.PORT || 80;


let videoDirectory = "video"
if(!existsSync(videoDirectory)) mkdirSync(videoDirectory);
const videos = readdirSync(videoDirectory)
                .map(filename => new Video(filename,videoDirectory));


app.use(morgan("dev"));

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.sendFile(cwd() + "/portal.html");
})

attachStaticRouter(app,"/designer","../designer")



app.get("/video/:videoName",(req,res)=>{
    const vidName = req.params.videoName
    const path = "video/" + escapeSlashes(decodeURIComponent(vidName));
    if(existsSync(path)){
        readFile(path,(err,data)=>{
            if(err) res.status(500).send(err)
            else res.send(data)
        })
    } else res.status(404).send({error:"video not found",path})
})

app.put("/video/:videoName",express.raw({limit:"2gb",type:"video/mp4"}),async(req,res)=>{
    if(!(req.body instanceof Buffer))
    {
        res.status(400).send({error:"invalid file"})
    }else{
        const filename = getUniqueFileName(req.params.videoName,"./video","mp4")
        await writeFile("./video/"+ filename,req.body)
        let newVideo = new Video(filename,"./video")
        videos.push(newVideo)
        res.send({success:"video uploaded",video:newVideo.toWeb()})
    }
        
})
app.get("/video",(req,res)=>{
    res.send(videos.map(video=>video.toWeb()))
})

app.post("/runDisplay",express.text(),async (req,res)=>{
    console.log(req.body)
     writeFileSync("init.json",req.body)
     //TO:DO work out way to find a free port
     const childPort = "8001";
     const child = spawn("node",["runScreens.mjs"],{env:{PORT:childPort}})
     child.on("spawn",()=>{
         //TO:DO redirect for clients not accessing as localhost
         setTimeout(()=>res.send(`http://localhost:${childPort}`),1000)
         
     })
     
     child.stdout.on("data",(data)=>{
         console.log("spawned stdout: "+data)
     })

     child.stderr.on("data",(data)=>{
        console.log("spawned stderr: "+data)
    })

     child.on("error",(code,signal)=>{
         res.status(500).send({error:"problem spawning screen server",
         code,signal});
     })

})

httpServer.listen(port,()=>
    console.log(`Server started on port ${port}`))
