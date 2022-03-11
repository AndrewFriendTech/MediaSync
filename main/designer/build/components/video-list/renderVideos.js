define(["require", "exports", "../../lib/elementsOfClass", "../../lib/getTemplate", "../sections-container/addSection", "../sections-container/newSection"], function (require, exports, elementsOfClass_1, getTemplate_1, addSection_1, newSection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderVideos = void 0;
    /**
     * renders video elements
     * @param {[Video]} videos
     */
    function renderVideos(videos) {
        let template = (0, getTemplate_1.getTemplate)("video");
        let container = document.getElementById("video-list-container");
        //remove any existing elements
        (0, elementsOfClass_1.elementsOfClass)("video")
            .forEach(element => element.remove());
        videos.forEach(video => {
            let element = template.cloneNode(true);
            element.querySelector(".video-name")
                .innerHTML = video.name;
            // TO:DO create function for following listeners
            element.querySelector(".video-add")
                .addEventListener("click", () => {
                const section = (0, newSection_1.newSection)(video);
                console.log(window.screens, window.selectedScreen - 1);
                window.screens[window.selectedScreen - 1].content.push(section);
                const sectionContainer = document.querySelector("#sections-container");
                sectionContainer.appendChild((0, addSection_1.addSection)(section));
            });
            // element.querySelector(".video-remove")
            //     .addEventListener("click",()=>removeVideo(video.uuid))
            container.append(element);
        });
    }
    exports.renderVideos = renderVideos;
});
