import express from "express";
import morgan from "morgan";
import {readFileSync} from 'fs';
import {createServer} from 'http';
import { Server as IOServer, Socket } from "socket.io";
import publicIp from 'public-ip';
import {internalIpV4Sync} from 'internal-ip';
import { SSL_OP_ALL } from "constants";

const app = express()
const httpServer = createServer(app);
const io = new IOServer(httpServer)

const addreses = {
    v4External: await publicIp.v4(),
    v4Internal: internalIpV4Sync(),
    domain: "http://project.andrewfriend.xyx",
    ssl: false
    //add  later ipv6, will require propper error handaling
}

const port = process.env.PORT || 80;
const init = JSON.parse(readFileSync("init.json",
                    {encoding:"utf-8"}));
const screens = [];

//validateInit()
app.use(morgan("dev"));

app.set("view engine","ejs")
app.get("/console" ,(req,res)=>{
    
});

app.get("/screen/:screen_number",(req,res) => {
    const screenNumber = Number(req.params.screen_number);
    const screens = init.screens;
    res.render("console",{addreses,screens});
})

io.on("connection", socket =>{
    console.log(`socket ${socket.id} has connected`)
    io.on("disconnect", reason =>{
        console.log(`socket ${socket.id} has disconnected due to ${reason}`)
    })
})

httpServer.listen(port,()=>
    console.log(`Server started on port ${port}
    Public IP:${addreses.v4External}
    Local IP:${addreses.v4Internal}`));
