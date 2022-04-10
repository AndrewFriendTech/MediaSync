/**
 *
 * @returns {[Video]} array of fetched videos
 */
export function getVideos(callback) {
    fetch("/video")
        .then(response => response.json())
        .then(object => callback(object));
}
