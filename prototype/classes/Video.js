import { spawnSync } from "child_process";
import { path as ffprobePath } from 'ffprobe-static';
import { openSync } from "fs";

class Video{
    #duration
    #path
    #codec
    
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
        this.#duration = videoData.duration
        this.#codec = codec_name
        this.#path = path
        this.file = openSync(path);
        


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
