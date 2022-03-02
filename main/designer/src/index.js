import {elementsOfClass} from './elementsOfClass.js'
import {uploadVideo} from "./components/video-upload/uploadVideo.js"


let selectedScreen = null;


function onScreenChange(){

}

function onSave(){
    
}


window.onload = () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo)
}

function getVideos(){

}

