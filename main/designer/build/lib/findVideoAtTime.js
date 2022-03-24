function findVideoAtTime(screen, time) {
    let timeSum = 0;
    for (let section of screen.content) {
        timeSum += section.duration;
        if (timeSum > time) {
            let video = window.videoData.find(video => section.uuid == video.uuid);
            if (video)
                return { video, adjustedTime };
            else
                throw "video not found by uuid";
        }
        else
            throw "";
    }
}
export {};
