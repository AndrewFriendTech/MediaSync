import { Video } from "../../types/Video";

/**
 * 
 * @returns {[Video]} array of fetched videos  
 */
export function getVideos(callback:((videoData:Video[])=>void)){
        fetch("/video")
        .then(response =>response.json())
        .then(object => callback(object as Video[]))
}