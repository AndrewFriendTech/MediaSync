import { addSection } from "../components/sections-container/addSection.js";
import { elementsOfClass } from "./elementsOfClass.js";
import { videoScreenChange } from "./videoFunctions.js";

export function onScreenChange(newScreenNumber:number){
    window.selectedScreen = newScreenNumber;
    console.log(`screen number ${newScreenNumber} clicked.`)
    let tabs = elementsOfClass("tab");
    console.log(tabs)
    tabs.forEach((element,index) => {
        
        if(index === (newScreenNumber-1)){
            console.log(`${index} selected`)
            element.classList.add("selected")
        } else {
            console.log(`${index} unselected`)
            element.classList.remove("selected")
        }
    });
    
    const sectionContainer = document.getElementById("sections-container");
    //if the element is not a template, removes it.
    elementsOfClass("section").forEach(element=>{
        if(!element.classList.contains("template")) element.remove();
    })
    window.screens[window.selectedScreen-1].content.forEach(section =>{
        sectionContainer.appendChild(addSection(section))
    })
    
    videoScreenChange()
}