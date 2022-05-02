import { saveDisplay } from "./saveDisplay.js";
export function runDisplay() {
    saveDisplay(false, filename => {
        fetch("/init/" + filename)
            .then(response => response.text())
            .then(url => location.href = url);
    });
}
