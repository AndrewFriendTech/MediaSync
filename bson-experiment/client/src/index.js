"use strict";
fetch("video.json")
    .then(res => res.json())
    .then(object => {
    var _a;
    const videoElement = document.getElementById("video");
    if (videoElement === null)
        return;
    videoElement.src = "data:video/mp4;base64," + object.video;
    document.body.appendChild(videoElement);
    (_a = document.getElementById("loading")) === null || _a === void 0 ? void 0 : _a.remove();
});
