import express from "express";
import morgan from "morgan";
import {readFileSync,existsSync} from 'fs';
import {createServer} from 'http';
import { Server as IOServer } from "socket.io";
import publicIp from 'public-ip';
import {internalIpV4Sync} from 'internal-ip';
import { spawnSync } from "child_process";
import { path as ffprobePath } from 'ffprobe-static';


const app = express()
const httpServer = createServer(app);
const io = new IOServer(httpServer)

class Screen{
    constructor(screenInit){
        this.ready()
    }
}

class ScreenArray extends Array{
    constructor(){
        super()
    }

    at(index){

    }

}

class VideoNotFoundError extends Error{
    constructor(){
        super("Video Not Found");
    }
}

class ffprobeError extends Error{
    constructor(stderrBuffer){
        super("ffprobe error")
        this.stderr = stderrBuffer.toString()
    }
}
class Video{
    constructor(name,videoDirectory){
        let path = videoDirectory+"/"+name;
        if(!existsSync(path)){
            throw new VideoNotFoundError();
        }
        /* Copyright (c) 2016, Eugene Ware 
          uses code adapted from : https://github.com/eugeneware/ffprobe/blob/master/index.js */
        const params = ['-v quiet','-show_streams', '-print_format', 'json', path];
        let result = spawnSync(ffprobePath,params)
        let stdout = JSON.parse(result.stdout.toString())
        let streams = stdout.streams;
        let videoData = stdout.streams[0];
        this._duration = videoData.duration
        this._codec = codec_name
        this._path = path

        //now get video metadata
         
    }

    /**
     * duration in seconds
     * @returns {number}
     */
    get duration(){
        return this._duration
    }
    
    /**
     * codec of video
     * @returns {string}
     */
    get codec(){
        return this._codec
    }

    get path(){
        return this._path
    }
    

}

class Content{

}




const addresses = {
    v4External: await publicIp.v4(),
    v4Internal: internalIpV4Sync(),
    domain: "http://project.andrewfriend.xyx",
    ssl: false
    //add  later ipv6, will require proper error handling
}

const port = process.env.PORT || 80;
const init = JSON.parse(readFileSync("init.json",
                    {encoding:"utf-8"}));

const screens = [];
const videos = {};

function screenFactory(init,){

}

//validateInit()
app.use(morgan("dev"));

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/console" ,(req,res)=>{
    const screens = init.screens;
    res.render("console",{addresses,screens});
    
});

app.get("/screen/:screen_number",(req,res) => {
    const screenNumber = Number(req.params.screen_number);
    
})

io.on("connection", socket =>{
    console.log(`socket ${socket.id} has connected`)
    io.on("disconnect", reason =>{
        console.log(`socket ${socket.id} has disconnected due to ${reason}`)
    })
})

httpServer.listen(port,()=>
    console.log(`Server started on port ${port}
    Public IP:${addresses.v4External}
    Local IP:${addresses.v4Internal}`));
