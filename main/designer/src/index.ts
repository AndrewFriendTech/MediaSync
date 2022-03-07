import {elementsOfClass} from './lib/elementsOfClass'
import {uploadVideo} from "./components/video-upload/uploadVideo"
import { getVideos } from './components/video-list/getVideos';
import { renderVideos } from './components/video-list/renderVideos';
import { createScreen } from './components/tab-container/createScreen';
import { Video } from './types/Video';
import { MediaScreen } from './types/MediaScreen';
import { addSection } from './components/sections-container/addSection';
import { Section } from './types/Section';
import { newSection } from './components/sections-container/newSection';


declare global{
  interface Window{
      selectedScreen:number,
      videoData: Video[],
      videoObjectURLs: string
      screens: MediaScreen[]
      exampleSection:Section
  }
}


window.selectedScreen = null;
window.videoData = []
window.screens = [
  
]




function onSave(){
    
}


//assign event listeners once DOM has loaded.
window.onload = () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo);
  window.videoData = getVideos();
  renderVideos(window.videoData);
  document.getElementById("add-screen")
    .addEventListener("click",createScreen)
  console.log("loaded")
  window.exampleSection = newSection(window.videoData[0])
  document.getElementById("sections-container").appendChild(addSection(window.exampleSection))
  
}



