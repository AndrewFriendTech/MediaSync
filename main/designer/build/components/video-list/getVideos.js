define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getVideos = void 0;
    /**
     *
     * @returns {[Video]} array of fetched videos
     */
    function getVideos() {
        const request = new XMLHttpRequest();
        request.open("GET", "/video", false);
        request.send();
        return JSON.parse(request.response);
    }
    exports.getVideos = getVideos;
});
