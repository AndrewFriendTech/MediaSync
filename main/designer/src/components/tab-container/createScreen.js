import { getTemplate } from "../../lib/getTemplate"
import { onScreenChange } from "../../lib/onScreenChange";

export function createScreen(){
    const screenNumber = screens.length+1;
    screens.push({content:[]})
    selectedScreen = screenNumber;
    const tabList  = document.getElementById("tab-list");
    const tabTemplate = getTemplate("tab")
    /** @type {HTMLElement} */
    
    tabTemplate.querySelector(".number").textContent = screenNumber;
    tabTemplate.addEventListener("click",()=>onScreenChange(screenNumber))
    tabList.appendChild(tabTemplate);
    
}