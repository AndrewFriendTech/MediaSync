export var VideoState;
(function (VideoState) {
    VideoState[VideoState["notLoaded"] = 0] = "notLoaded";
    VideoState[VideoState["playing"] = 1] = "playing";
    VideoState[VideoState["paused"] = 2] = "paused";
})(VideoState || (VideoState = {}));
