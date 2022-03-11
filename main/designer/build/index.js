define(["require", "exports", "./components/video-upload/uploadVideo", "./components/video-list/getVideos", "./components/video-list/renderVideos", "./components/tab-container/createScreen", "./components/sections-container/newSection", "./types/VideoState", "./lib/stopwatch", "./types/ObjectURLMap", "./lib/videoFunctions"], function (require, exports, uploadVideo_1, getVideos_1, renderVideos_1, createScreen_1, newSection_1, VideoState_1, stopwatch_1, ObjectURLMap_1, videoFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.selectedScreen = null;
    window.videoData = [];
    window.screens = [];
    window.videoState = VideoState_1.VideoState.notLoaded;
    window.displayTime = new stopwatch_1.Stopwatch();
    window.objectURLMap = new ObjectURLMap_1.ObjectURLMap;
    function onSave() {
    }
    //assign event listeners once DOM has loaded.
    window.addEventListener("load", () => {
        document.getElementById("video-upload-button")
            .addEventListener("click", uploadVideo_1.uploadVideo);
        window.videoData = (0, getVideos_1.getVideos)();
        (0, renderVideos_1.renderVideos)(window.videoData);
        document.getElementById("add-screen")
            .addEventListener("click", createScreen_1.createScreen);
        document.getElementById("display-play")
            .addEventListener("click", videoFunctions_1.playVideo);
        document.getElementById("display-pause")
            .addEventListener("click", videoFunctions_1.pauseVideo);
        console.log("loaded");
        window.exampleSection = (0, newSection_1.newSection)(window.videoData[0]);
    });
});
