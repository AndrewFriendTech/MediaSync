import {elementsOfClass} from './elementsOfClass.js'
import {uploadVideo} from "./components/video-upload/uploadVideo.js"


let selectedScreen = null;


function onScreenChange(){

}

function onSave(){
    
}

function previewFile() {
    const fileElement = document.querySelector('input[type=file]')
    if(!fileElement){
        return  
    } 
    const file = fileElement.files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
        console.log(reader.result);
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }
}




window.onload = () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo)
}

function getVideos(){

}

