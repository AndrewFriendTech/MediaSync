import { spawnSync } from "child_process";
import { randomUUID } from "crypto";
import { path as ffprobePath } from 'ffprobe-static';
import { openSync,existsSync } from "fs";

class Video{
    #duration
    #path
    #codec
    #file
    #uuid
    #extension
    #name
    
    constructor(name,videoDirectory){
        let path = videoDirectory+"/"+name;
        if(!existsSync(path)){
            console.log(`path ${path}, does not exist`)
            throw new VideoNotFoundError();
        }
        /* Copyright (c) 2016, Eugene Ware 
          uses code adapted from : https://github.com/eugeneware/ffprobe/blob/master/index.js */
        const params = ['-show_streams', '-print_format', 'json', path];
        let result = spawnSync(ffprobePath,params)
        let stdout = JSON.parse(result.stdout.toString())
        console.log(stdout)
        let streams = stdout.streams;
        let videoData = stdout.streams[0];
        this.#duration = videoData.duration
        this.#codec = videoData.codec_name
        this.#path = path
        this.#file = openSync(path);
        this.#uuid = randomUUID();
        this.#name = name;
        let nameSplit = name.split(".")
        this.#extension = nameSplit[nameSplit.length -1];




        //now get video metadata
         
    }

    /**
     * duration in seconds
     * @returns {number}
     */
    get duration(){
        return this.#duration
    }
    
    /**
     * codec of video
     * @returns {string}
     */
    get codec(){
        return this.#codec
    }

    get path(){
        return this.#path
    }

    get uuid(){
        return this.#uuid
    }

    get file(){
        return this.#file
    }

    get extension(){
        return this.#extension
    }

    get name(){
        return this.#name
    }

    set name(newName){
        this.#name =  newName
    }
    
    toWeb(){
        return{
            name:this.#name,
            duration:this.#duration,
            uuid:this.#uuid
        }
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

export {Video,VideoNotFoundError,ffprobeError};
