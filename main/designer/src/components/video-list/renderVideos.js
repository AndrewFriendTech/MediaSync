import { elementsOfClass } from "../../lib/elementsOfClass";
import { getTemplate } from "../../lib/getTemplate";

/**
 * renders video elements
 * @param {[Video]} videos 
 */
export function renderVideos(videos){
    let template = getTemplate("video")
    let container =  document.getElementById("video-list-container");
    //remove any existing elements
    elementsOfClass("video")
        .forEach(element => element.remove());
    videos.forEach(video =>{ 
        /** @type {HTMLElement}*/
        let element = template.cloneNode(true)
        element.querySelector(".video-name")
            .innerHTML = video.name
        // TO:DO create function for following listeners
        // element.querySelector(".video-add")
        //     .addEventListener("click",()=>addVideo(video.uuid))

        // element.querySelector(".video-remove")
        //     .addEventListener("click",()=>addVideo(video.uuid))
        container.append(element)
        
    })
    
}