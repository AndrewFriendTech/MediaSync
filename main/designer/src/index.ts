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
import { VideoState } from './types/VideoState';
import { Stopwatch } from './lib/stopwatch';
import { ObjectURLMap } from './types/ObjectURLMap';
import { pauseVideo, playVideo } from './lib/videoFunctions';

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



