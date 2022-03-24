import { elementsOfClass } from "../../lib/elementsOfClass.js";
import { getTemplate } from "../../lib/getTemplate.js";
import { addSection } from "../sections-container/addSection.js";
import { newSection } from "../sections-container/newSection.js";
/**
 * renders video elements
 * @param {[Video]} videos
 */
export function renderVideos(videos) {
    let template = getTemplate("video");
    let container = document.getElementById("video-list-container");
    //remove any existing elements
    elementsOfClass("video")
        .forEach(element => element.remove());
    videos.forEach(video => {
        let element = template.cloneNode(true);
        element.querySelector(".video-name")
            .innerHTML = video.name;
        // TO:DO create function for following listeners
        element.querySelector(".video-add")
            .addEventListener("click", () => {
            const section = newSection(video);
            console.log(window.screens, window.selectedScreen - 1);
            window.screens[window.selectedScreen - 1].content.push(section);
            const sectionContainer = document.querySelector("#sections-container");
            sectionContainer.appendChild(addSection(section));
        });
        // element.querySelector(".video-remove")
        //     .addEventListener("click",()=>removeVideo(video.uuid))
        container.append(element);
    });
}
