import { getTemplate } from "../../lib/getTemplate"
import { onScreenChange } from "../../lib/onScreenChange";
import { MediaScreen } from "../../types/MediaScreen";

export function createScreen(){
    const screenNumber = window.screens.length+1;
    window.screens.push({content:[]})
    window.selectedScreen = screenNumber;
    const tabList  = document.getElementById("tab-list");
    const tabTemplate = getTemplate("tab")
    /** @type {HTMLElement} */
    
    tabTemplate.querySelector(".number").textContent = String(screenNumber);
    tabTemplate.addEventListener("click",()=>onScreenChange(screenNumber))
    tabList.appendChild(tabTemplate);
    onScreenChange(screenNumber);
    
}