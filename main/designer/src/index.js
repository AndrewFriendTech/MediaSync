import {elementsOfClass} from './lib/elementsOfClass.js'
import {uploadVideo} from "./components/video-upload/uploadVideo.js"
import { getVideos } from './components/video-list/getVideos.js';
import { renderVideos } from './components/video-list/renderVideos.js';


let selectedScreen = null;
let videos = []


function onScreenChange(){

}

function onSave(){
    
}


//assign event listeners once DOM has loaded.
window.onload = () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo);
  videos = getVideos();
  renderVideos(videos)
  
}



