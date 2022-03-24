//creates new blank section from video by default videos entire length
export function newSection(video) {
    return {
        src: video.name,
        duration: video.duration,
        uuid: video.uuid,
        start: 0
    };
}
