import express from "express";
import morgan from "morgan";
import {readFileSync,existsSync, copyFileSync, readFile, readdir, readdirSync, mkdirSync} from 'fs';
import { writeFile } from "fs/promises";
import {createServer} from 'http';
import { Server as IOServer } from "socket.io";
import publicIp, { v4 } from 'public-ip';
import {internalIpV4Sync} from 'internal-ip';
import { generateScreens } from "./lib/generateScreens.js";
import { SocketAlreadyAttachedError } from "./classes/Screen.js";
import { Video } from "./classes/Video.js";
import { stdout } from "process";
import { Timer} from 'timer-node';
import { attachStaticRouter } from "./lib/staticRouter.js";
import { getUniqueFileName } from "./lib/checkInFiles.js"
import { escapeSlashes } from "./lib/escapeSlashes.js";
const videoTimer = new Timer()


const app = express()
const httpServer = createServer(app);
const io = new IOServer(httpServer)


const NO_DISPLAY = 0,LOADING_DISPLAY = 1, IN_ACTION = 2;
let display_state = NO_DISPLAY

let videoDirectory = "video"
if(!existsSync(videoDirectory)) mkdirSync(videoDirectory);
const videos = readdirSync(videoDirectory)
                .map(filename => new Video(filename,videoDirectory));



const port = process.env.PORT || 80;
// const init = JSON.parse(readFileSync("init.json",
//                     {encoding:"utf-8"}));

// const screens = generateScreens(init);
//const videos = screens.flatMap(screen => screen.videos);


const addresses = {
    v4External: await publicIp.v4(),
    v4Internal: internalIpV4Sync(),
    domain: "project.andrewfriend.xyz",
    ssl: false, 
    port:port 
    //add  later ipv6, will require proper error handling
}


//validateInit()
app.use(morgan("dev"));

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.redirect("/console");
})

attachStaticRouter(app,"/designer","../designer")

app.get("/console" ,(req,res)=>{
    const screens = init.screens;
    res.render("console",{addresses,screens});
    
});

app.get("/screen/:screen_number",(req,res) => {
    const screenNumber = Number(req.params.screen_number);
    res.render("screen",{screenNumber});
    
})

io.on("connection", socket =>{
    console.log(`socket ${socket.id} has connected`)
    io.on("disconnect", reason =>{
        console.log(`socket ${socket.id} has disconnected due to ${reason}`)
    })

    //clients
    socket.on("register",data =>{
        let screenNumber = Number(data.screen)
        socket.join("screens")
        if(isNaN(screenNumber)) io.emit("error","requested screen is not a number");
        else if(screenNumber < 0) io.emit("error","screen number can not be negative");
        else if(screenNumber >= screens.length) io.emit("error","screen number is more than declared screens");
        else {
            let screen = screens[screenNumber];
            try {
                screen.registerSocket(socket);
            } catch (error) {
                if(error instanceof SocketAlreadyAttachedError){
                    console.error(`Screen ${screenNumber} already has a socket attached`)
                    io.emit("error","socket already attached to screen");
                    return;
                }
            }
            console.log(`Screen number ${screenNumber} is registered`);
            io.to("console").emit("screenRegistered",{screen:screenNumber})
            socket.emit("videos",{
                sections: screen.sections.map(section => {
                    return {
                        start:section.start,
                        end:section.end,
                        video: section.video.uuid,
                        
                    };   
                }),
                videos: screen.videos.map(video => {
                    return {
                        url:generateURL(video),
                        uuid: video.uuid,
                        name: video.name
                    }
                }),
                playing:screen.playing

            })
            socket.on("ready",(data)=>{
                screen.ready = true;
                onReady(screenNumber);
            })
            
            

            socket.on("disconnect", (reason)=>{
                screen.deregisterSocket();
            })
            
            socket.on("getTimestamp",(data)=>{
                socket.emit("timestamp",videoTimer.time().s);
            })
            
    
        }
    })

    //console
    socket.on("console",data => {
        socket.join("console");
        socket.emit("status",screens.map(screen => ({
            playing:screen.playing,
            ready:screen.ready,
            socketRegistered:screen.socketRegistered 
        })));
        socket.on("pause",pause)
        socket.on("play",play)

    })

    
})

function onReady(screenNumber){
    io.to("console").emit("screenReady",{screen:screenNumber});
    if(screens.every(screen=> screen.ready === true)){
        console.log("all screens ready")
        play()    
    }
}

function play(){
    screens.forEach(screen => screen.play());
    io.to("screens").emit("play");
    io.to("console").emit("play");
    videoTimer.start()
}

function pause(){
    console.log("pause");
    screens.forEach(screen => screen.pause())
    io.to("screens").emit("pause")
    io.to("console").emit("pause")
    videoTimer.pause()
}

/**
 * 
 * @param {Video} video 
 * @returns {String}
 */
function generateURL(video){
    return `video/${video.uuid}.${video.extension}`
}

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

httpServer.listen(port,()=>
    console.log(`Server started on port ${port}
    Public IP:${addresses.v4External}
    Local IP:${addresses.v4Internal}`,));
