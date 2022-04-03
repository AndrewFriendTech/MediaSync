export class ObjectURLMap {
    constructor() {
        this.map = {};
    }
    load(videos) {
        videos.forEach(() => this.get);
    }
    set(uuid, blob) {
        let objectURL = URL.createObjectURL(blob);
        this.map[uuid] = objectURL;
    }
    get(video) {
        console.log(video.uuid);
        console.log(JSON.stringify(this.map));
        if (this.map[video.uuid]) {
            return this.map[video.uuid];
        }
        else {
            throw "video not found";
        }
    }
}
