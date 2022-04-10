import { addSection } from "./addSection.js";

export function renderSections(){
    const sectionContainer = document.getElementById("sections-container") as HTMLElement;
    //remove non templates
    Array.from(sectionContainer.children).forEach(node=>{
        if(!(node as HTMLElement).classList.contains("template"))
            node.remove()
    })
    //append current sections
    for(const section of  window.screens[window.selectedScreen-1].content){
        sectionContainer.appendChild(addSection(section))
    }
}