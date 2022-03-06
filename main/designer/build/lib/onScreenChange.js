import { elementsOfClass } from "./elementsOfClass";
export function onScreenChange(newScreenNumber) {
    window.selectedScreen = newScreenNumber;
    console.log(`screen number ${newScreenNumber} clicked.`);
    let tabs = elementsOfClass("tab");
    console.log(tabs);
    tabs.forEach((element, index) => {
        if (index === (newScreenNumber - 1)) {
            console.log(`${index} selected`);
            element.classList.add("selected");
        }
        else {
            console.log(`${index} unselected`);
            element.classList.remove("selected");
        }
    });
    // TO:DO once sections rendered code done , uncomment
    //renderSections(window.screens[newScreenNumber])
}
