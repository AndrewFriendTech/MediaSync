define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VideoState = void 0;
    var VideoState;
    (function (VideoState) {
        VideoState[VideoState["notLoaded"] = 0] = "notLoaded";
        VideoState[VideoState["playing"] = 1] = "playing";
        VideoState[VideoState["paused"] = 2] = "paused";
    })(VideoState = exports.VideoState || (exports.VideoState = {}));
});
