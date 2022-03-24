import { getTemplate } from "../../lib/getTemplate.js";
import { Section } from "../../types/Section.js";

export function addSection(section:Section):HTMLElement{
    const template = getTemplate("section");
    const video = window.videoData.find(video => video.uuid == section.uuid)
    if(!video) throw "video is not part of video";
    //TO:DO download video to computer
    const lengthInput = template.querySelector(".length-input") as HTMLInputElement;
    const startInput = template.querySelector(".start-input") as HTMLInputElement;
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
    lengthInput.addEventListener("input",()=>{
        const num = Number(lengthInput.value)
        if(num !== NaN) section.duration = num;
        else console.error("duration input NaN",lengthInput.value)
    })
    startInput.addEventListener("input",()=>{
        const num = Number(startInput.value)
        if(num !== NaN){
            section.start = num;
            const lengthMax = video.duration - num;
            lengthInput.max = String(lengthMax);
            //adjust duration if duration overruns video
            if(section.duration > lengthMax){
                section.duration = lengthMax; 
                lengthInput.value = String(lengthMax);
            } 
        } 
        else return console.error("start input NaN",startInput.value)
    })
    return template;
}