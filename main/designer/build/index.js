import { uploadVideo } from "./components/video-upload/uploadVideo.js";
import { getVideos } from './components/video-list/getVideos.js';
import { renderVideos } from './components/video-list/renderVideos.js';
import { createScreen } from './components/tab-container/createScreen.js';
import { VideoState } from './types/VideoState.js';
import { Stopwatch } from './lib/stopwatch.js';
import { ObjectURLMap } from './types/ObjectURLMap.js';
import { pauseVideo, playVideo } from './lib/videoFunctions.js';
import { saveDisplay } from './components/file-controls/saveDisplay.js';
import { runDisplay } from './components/file-controls/runDisplay.js';
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
    getVideos((videoData => {
        window.videoData = videoData;
        renderVideos(window.videoData);
    }));
    document.getElementById("add-screen")
        .addEventListener("click", createScreen);
    document.getElementById("display-play")
        .addEventListener("click", playVideo);
    document.getElementById("display-pause")
        .addEventListener("click", pauseVideo);
    document.getElementById("save")
        .addEventListener("click", () => saveDisplay());
    document.getElementById("play-server")
        .addEventListener("click", runDisplay);
    console.log("loaded");
});
