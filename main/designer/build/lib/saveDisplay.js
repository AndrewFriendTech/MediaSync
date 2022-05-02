export function saveDisplay(error) {
    const display = {
        videoDirectory: "/video",
        screens: window.screens
    };
    const options = {
        method: "POST",
        body: JSON.stringify(display),
        headers: { "Content-Type": "application/json" }
    };
    let filename = window.filename;
    if (!window.filename) {
        const errorMessage = error ? "Filename already in use.Try Again!\n " : "";
        while (!filename)
            filename = prompt(errorMessage + "What do you want to call the display?");
        options.headers["X-Overwrite"] = "false";
    }
    else {
        options.headers["X-Overwrite"] = "true";
    }
    fetch("/init/" + filename, options)
        .then(response => {
        if (response.status == 200) {
            window.filename = filename;
        }
        else {
            response.json().then(res => {
                if (res.error && res.error == "file already exists") {
                    saveDisplay(true);
                    return;
                }
                else {
                    console.error(res);
                }
            });
        }
    });
}
