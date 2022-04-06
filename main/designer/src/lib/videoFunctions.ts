import { Bound } from "../types/Bound.js";
import { MediaScreen } from "../types/MediaScreen.js";
import { ObjectURLMap } from "../types/ObjectURLMap.js";
import { Section } from "../types/Section.js";
import { Video } from "../types/Video.js";
import { VideoState } from "../types/VideoState.js";

let timeInterval: number | NodeJS.Timer;
let time  = 0;
let screenBounds:Bound[];
let screenCurrentSection:number = 0;

let videoDiv: HTMLVideoElement
window.addEventListener("load", ()=>{
    videoDiv = document.getElementById("screen-video") as HTMLVideoElement;
    if (videoDiv == undefined) throw "videodiv not not found";
})

export function playVideo(){
    if(window.videoState == VideoState.notLoaded){
        startVideo()
    } else if (window.videoState == VideoState.paused ) {
        timeInterval = setInterval(onTick,1000);
        videoDiv.play()
    }
    
}

export function startVideo(){
    if(window.screens.length == 0){
        //TO:DO proper error message
        console.log("no screens yet");
        return;
    }

    if(window.screens[window.selectedScreen-1].content.length == 0){
        console.log("no sections in sreen yet")
        return
    }

    time = 0

    if(window.videoState === VideoState.notLoaded){
        //TO:DO loading message
        window.videoData.forEach(video =>{
            fetch(`/video/${video.name}`)
            .then(response => response.blob())
            .then(blob => {
                window.objectURLMap.set(video.uuid,blob)
                screenBounds = getBounds(window.screens[window.selectedScreen-1]);
                const firstVideo = findFirstVideo(window.screens[window.selectedScreen-1])
                console.log("first video",firstVideo)
                if(!firstVideo) throw "firstVideo is not defined"
                videoDiv.src = window.objectURLMap.get(firstVideo);
                videoDiv.play()
                window.videoState = VideoState.playing
                timeInterval = setInterval(onTick,1000);
            })
            
        })
        
    } else console.log("video is already playing")
}

export function pauseVideo(){
    //stopgap to stop errors involving decimal times with the tick code
    clearInterval(timeInterval as number);
    videoDiv.pause()
    videoDiv.currentTime = time;
    window.videoState = VideoState.paused;
    
}

export function videoScreenChange(){
    if( window.screens[window.selectedScreen-1].content.length > 0){
        videoDiv.pause()
        clearInterval(timeInterval as number)
        screenBounds = getBounds(window.screens[window.selectedScreen-1])
        //skip too section in display
        const place = findPlace(window.screens[window.selectedScreen-1],time)
        videoDiv.src = window.objectURLMap.get(place.video);
        videoDiv.currentTime = place.start;
        if(window.videoState = VideoState.playing) videoDiv.play();
        timeInterval = setInterval(onTick,1000);
    }
    
}

function onTick(){
    //in case more fine tuned time algorithm is used.
    let eq = (a:number,b:number) => Math.abs(a-b) < 0.5;
    console.log(screenBounds);
    if(eq(screenBounds[screenCurrentSection].value,time)){
        videoDiv.src = window.objectURLMap.get(screenBounds[screenCurrentSection].next);
        const currentSection = window.screens[window.selectedScreen-1].content[screenCurrentSection]
        videoDiv.currentTime = currentSection.start;
        screenCurrentSection++;
    }
    time += 1
    console.log(time,videoDiv.currentTime)
}



//when numbers are reached , skip to next section
function getBounds(screen:MediaScreen):Bound[]{
    console.log("screen",screen,screen.content.length == 0)
    const bounds:Bound[] = []
    let timeSum:number = 0;
    for(let i = 0; i < screen.content.length;i++){
        console.log(screen)
        console.log("loop")
        timeSum += screen.content[i].duration;
        let nextSection:Section, nextVideo:Video;
        if(i+1 < screen.content.length){
            nextSection = screen.content[i+1]
            nextVideo = window.videoData.find(video => nextSection.uuid == video.uuid)
            if(nextVideo = undefined) throw "next video not found"
            else bounds.push({value:timeSum,next:nextVideo})
        } else bounds.push(null);
        
    }
    return bounds;
}

function findFirstVideo(screen:MediaScreen):Video{
    if(screen.content.length > 0){
        console.log(screen,window.videoData)
        const firstVideo = window.videoData.find(video => video.uuid == screen.content[0].uuid);
        if(!firstVideo) throw "firstVideo is undefined"; 
        return firstVideo
    } else {
        return undefined;
    }
}

function loop(){

}

function findPlace(screen:MediaScreen,time:number):{video:Video,start:number}{
    let timeSum = 0;
    for(let section of screen.content){
        timeSum += section.duration;
        if(timeSum>time){
            const video = window.videoData.find(video => section.uuid == video.uuid);
            let videoStartPlace = timeSum - section.duration;
            if(video) return {video,start:section.start + (time - videoStartPlace) };
            else throw "video not found by uuid";
        } else throw "out of video bounds"
    }
}

