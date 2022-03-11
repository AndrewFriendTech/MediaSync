define(["require", "exports", "../../lib/getTemplate", "../../lib/onScreenChange"], function (require, exports, getTemplate_1, onScreenChange_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createScreen = void 0;
    function createScreen() {
        const screenNumber = window.screens.length + 1;
        window.screens.push({ content: [] });
        window.selectedScreen = screenNumber;
        const tabList = document.getElementById("tab-list");
        const tabTemplate = (0, getTemplate_1.getTemplate)("tab");
        /** @type {HTMLElement} */
        tabTemplate.querySelector(".number").textContent = String(screenNumber);
        tabTemplate.addEventListener("click", () => (0, onScreenChange_1.onScreenChange)(screenNumber));
        tabList.appendChild(tabTemplate);
        (0, onScreenChange_1.onScreenChange)(screenNumber);
    }
    exports.createScreen = createScreen;
});
