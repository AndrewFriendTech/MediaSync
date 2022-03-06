import { uploadVideo } from "./components/video-upload/uploadVideo";
import { getVideos } from './components/video-list/getVideos';
import { renderVideos } from './components/video-list/renderVideos';
import { createScreen } from './components/tab-container/createScreen';
window.selectedScreen = null;
window.videoData = [];
window.screens = [];
function onSave() {
}
//assign event listeners once DOM has loaded.
window.onload = () => {
    document.getElementById("video-upload-button")
        .addEventListener("click", uploadVideo);
    window.videoData = getVideos();
    renderVideos(window.videoData);
    document.getElementById("add-screen")
        .addEventListener("click", createScreen);
};
