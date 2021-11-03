import {Video} from './Video.js';

class Section{
    #video
    #start
    #end

    /**
     * @param {Video} video 
     * @param {number} start start time in seconds
     * @param {number} end end time in seconds
     */
    constructor(video,start,end){
        if(start + end > video.duration){
            throw new VideoRangeError();
        }
        if(start < 0 || end <= 0){
            throw new TypeError("start and end arguments need to be positive numbers"); 
        }
        this.#video = video;
        this.#start = start;
        this.#end = end;
    }

    get video(){return this.#video}
    get start(){return this.#start}
    get end(){return this.#end}

}

class VideoRangeError extends RangeError {
    constructor(){
        super("video section exceeds range of video ")
    }
}

export {Section, VideoRangeError};
