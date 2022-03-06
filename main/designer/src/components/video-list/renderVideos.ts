import { elementsOfClass } from "../../lib/elementsOfClass";
import {getTemplate} from "../../lib/getTemplate"
import { Video } from "../../types/Video";



/**
 * renders video elements
 * @param {[Video]} videos 
 */
export function renderVideos(videos:Video[]){
    let template = getTemplate("video")
    let container =  document.getElementById("video-list-container");
    //remove any existing elements
    elementsOfClass("video")
        .forEach(element => element.remove());
    videos.forEach(video =>{ 
        let element = template.cloneNode(true) as HTMLElement;
        element.querySelector(".video-name")
            .innerHTML = video.name
        // TO:DO create function for following listeners
        // element.querySelector(".video-add")
        //     .addEventListener("click",()=>addVideo(video.uuid))

        // element.querySelector(".video-remove")
        //     .addEventListener("click",()=>removeVideo(video.uuid))
        container.append(element)
        
    })
    
}