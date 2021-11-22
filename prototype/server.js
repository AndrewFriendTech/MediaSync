import express from "express";
import morgan from "morgan";
import {readFileSync,existsSync, copyFileSync} from 'fs';
import {createServer} from 'http';
import { Server as IOServer } from "socket.io";
import publicIp from 'public-ip';
import {internalIpV4Sync} from 'internal-ip';
import { generateScreens } from "./lib/generateScreens.js";
import { SocketAlreadyAttachedError } from "./classes/Screen.js";



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

const screens = generateScreens(init);
console.log(screens);


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
    res.render("screen",{screenNumber});
    
})

io.on("connection", socket =>{
    console.log(`socket ${socket.id} has connected`)
    io.on("disconnect", reason =>{
        console.log(`socket ${socket.id} has disconnected due to ${reason}`)
    })

    socket.on("register",data =>{
        let screenNumber = Number(data.screen)
        if(isNaN(screenNumber)) io.emit("error","requested screen is not a number");
        else if(screenNumber < 0) io.emit("error","screen number can not be negative");
        else if(screenNumber >= screens.length) io.emit("error","screen number is more than declared screens");
        else {
            try {
                screens[screenNumber].registerSocket(socket);
            } catch (error) {
                if(error instanceof SocketAlreadyAttachedError){
                    console.error(`Screen ${screenNumber} already has a socket attached`)
                    io.emit("error","socket already attached to screen");
                    return;
                }
            }
            console.log(`Screen number ${screenNumber} is registered`);
        }

    })
})

httpServer.listen(port,()=>
    console.log(`Server started on port ${port}
    Public IP:${addresses.v4External}
    Local IP:${addresses.v4Internal}`));
