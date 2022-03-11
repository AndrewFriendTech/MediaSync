define(["require", "exports", "../components/sections-container/addSection", "./elementsOfClass", "./videoFunctions"], function (require, exports, addSection_1, elementsOfClass_1, videoFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onScreenChange = void 0;
    function onScreenChange(newScreenNumber) {
        window.selectedScreen = newScreenNumber;
        console.log(`screen number ${newScreenNumber} clicked.`);
        let tabs = (0, elementsOfClass_1.elementsOfClass)("tab");
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
        const sectionContainer = document.getElementById("sections-container");
        //if the element is not a template, removes it.
        (0, elementsOfClass_1.elementsOfClass)("section").forEach(element => {
            if (!element.classList.contains("template"))
                element.remove();
        });
        window.screens[window.selectedScreen - 1].content.forEach(section => {
            sectionContainer.appendChild((0, addSection_1.addSection)(section));
        });
        (0, videoFunctions_1.videoScreenChange)();
    }
    exports.onScreenChange = onScreenChange;
});
