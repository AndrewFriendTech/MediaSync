import { uploadVideo } from "./components/video-upload/uploadVideo.js";
import { getVideos } from './components/video-list/getVideos.js';
import { renderVideos } from './components/video-list/renderVideos.js';
import { createScreen } from './components/tab-container/createScreen.js';
import { newSection } from './components/sections-container/newSection.js';
import { VideoState } from './types/VideoState.js';
import { Stopwatch } from './lib/stopwatch.js';
import { ObjectURLMap } from './types/ObjectURLMap.js';
import { pauseVideo, playVideo } from './lib/videoFunctions.js';
window.selectedScreen = null;
window.videoData = [];
window.screens = [];
window.videoState = VideoState.notLoaded;
window.displayTime = new Stopwatch();
window.objectURLMap = new ObjectURLMap;
function onSave() {
}
//assign event listeners once DOM has loaded.
window.addEventListener("load", () => {
    document.getElementById("video-upload-button")
        .addEventListener("click", uploadVideo);
    window.videoData = getVideos();
    renderVideos(window.videoData);
    document.getElementById("add-screen")
        .addEventListener("click", createScreen);
    document.getElementById("display-play")
        .addEventListener("click", playVideo);
    document.getElementById("display-pause")
        .addEventListener("click", pauseVideo);
    console.log("loaded");
    window.exampleSection = newSection(window.videoData[0]);
});
