import { MediaScreen } from "../types/MediaScreen.js";
import { Video } from "../types/Video.js";

function findVideoAtTime(screen:MediaScreen,time:number):{
    video:Video,
    adjustedTime:number}
    {
    let timeSum:number = 0;
    for(let section of screen.content){
        timeSum += section.duration;
        if(timeSum>time){
            let video = window.videoData.find(video => section.uuid == video.uuid);
            if(video) return {video,adjustedTime};
            else throw "video not found by uuid";
        } else throw ""
    }
}