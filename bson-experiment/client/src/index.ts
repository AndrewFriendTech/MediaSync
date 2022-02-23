fetch("video.json")
    .then(res => res.json())
    .then(object=>{
        const videoElement = document.getElementById("video") as HTMLVideoElement
        if(videoElement === null) return;
        videoElement.src = "data:video/mp4;base64," + object.video
        document.body.appendChild(videoElement);
        document.getElementById("loading")?.remove()
    })