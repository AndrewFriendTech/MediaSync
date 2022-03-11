define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.newSection = void 0;
    //creates new blank section from video by default videos entire length
    function newSection(video) {
        return {
            src: video.name,
            duration: video.duration,
            uuid: video.uuid,
            start: 0
        };
    }
    exports.newSection = newSection;
});
