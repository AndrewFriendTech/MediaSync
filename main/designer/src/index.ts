import {elementsOfClass} from './lib/elementsOfClass.js'
import {uploadVideo} from "./components/video-upload/uploadVideo.js"
import { getVideos } from './components/video-list/getVideos.js';
import { renderVideos } from './components/video-list/renderVideos.js';
import { createScreen } from './components/tab-container/createScreen.js';
import { Video } from './types/Video.js';
import { MediaScreen } from './types/MediaScreen.js';
import { addSection } from './components/sections-container/addSection.js';
import { Section } from './types/Section';
import { newSection } from './components/sections-container/newSection.js';
import { VideoState } from './types/VideoState.js';
import { Stopwatch } from './lib/stopwatch.js';
import { ObjectURLMap } from './types/ObjectURLMap.js';
import { pauseVideo, playVideo } from './lib/videoFunctions.js';

declare global{
  interface Window{
      selectedScreen:number,
      videoData: Video[],
      videoObjectURLs: string
      screens: MediaScreen[]
      exampleSection:Section
      videoState:VideoState
      displayTime:Stopwatch
      objectURLMap:ObjectURLMap
  }
}


window.selectedScreen = null;
window.videoData = []
window.screens = [

]
window.videoState = VideoState.notLoaded;
window.displayTime = new Stopwatch();
window.objectURLMap = new ObjectURLMap;



function onSave(){
    
}


//assign event listeners once DOM has loaded.
window.addEventListener("load", () => {
  document.getElementById("video-upload-button")
    .addEventListener("click",uploadVideo);
  window.videoData = getVideos();
  renderVideos(window.videoData);
  document.getElementById("add-screen")
    .addEventListener("click",createScreen)
  document.getElementById("display-play")
    .addEventListener("click",playVideo)
  document.getElementById("display-pause")
    .addEventListener("click",pauseVideo)
  console.log("loaded")
  window.exampleSection = newSection(window.videoData[0])
  
})



