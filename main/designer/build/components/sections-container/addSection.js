define(["require", "exports", "../../lib/getTemplate"], function (require, exports, getTemplate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addSection = void 0;
    function addSection(section) {
        const template = (0, getTemplate_1.getTemplate)("section");
        const video = window.videoData.find(video => video.uuid == section.uuid);
        if (!video)
            throw "video is not part of video";
        //TO:DO download video to computer
        const lengthInput = template.querySelector(".length-input");
        const startInput = template.querySelector(".start-input");
        //set video name text
        template.querySelector(".video-name").textContent = section.src;
        //set values
        lengthInput.value = String(section.duration);
        startInput.value = String(section.start);
        //set bounds
        startInput.max = String(video.duration);
        startInput.min = String(0);
        lengthInput.max = String(video.duration);
        lengthInput.min = String(0);
        //set event listeners
        lengthInput.addEventListener("input", () => {
            const num = Number(lengthInput.value);
            if (num !== NaN)
                section.duration = num;
            else
                console.error("duration input NaN", lengthInput.value);
        });
        startInput.addEventListener("input", () => {
            const num = Number(startInput.value);
            if (num !== NaN) {
                section.start = num;
                const lengthMax = video.duration - num;
                lengthInput.max = String(lengthMax);
                //adjust duration if duration overruns video
                if (section.duration > lengthMax) {
                    section.duration = lengthMax;
                    lengthInput.value = String(lengthMax);
                }
            }
            else
                return console.error("start input NaN", startInput.value);
        });
        return template;
    }
    exports.addSection = addSection;
});
