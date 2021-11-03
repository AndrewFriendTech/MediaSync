import express from "express";
import morgan from "morgan";
import {readFileSync,existsSync} from 'fs';
import {createServer} from 'http';
import { Server as IOServer } from "socket.io";
import publicIp from 'public-ip';
import {internalIpV4Sync} from 'internal-ip';
import { Video, VideoNotFoundError,ffprobeError } from "./classes/Video";


const app = express()
const httpServer = createServer(app);
const io = new IOServer(httpServer)






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
