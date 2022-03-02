import {elementsOfClass} from './elementsOfClass.js'


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


function uploadVideo(){
  /** @type {HTMLInputElement} */
  let fileSelector = document.getElementById("video-upload-input")
  if(fileSelector.files.length == 0){
    //TO:DO code to warn user of error
  } else {
    let file = fileSelector.files[0]
    if(file.type !== "video/mp4"){
      //TO:DO error
    } else{
      fetch(`/video/${file.name}`,{method:"PUT",body:file})
        .then(response => response.json())
        .then(console.log)
    }
  }
  
}

window.onload = () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo)
}

function getVideos(){

}

