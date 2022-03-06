import {Video} from 'Video'

class ObjectURLMap{
    private map:any;

    constructor(){
        this.map = {}
    }
    
    get(video:Video):string{
        if(this.map[video.uuid]){
            return this.map[video.uuid];
        } else {
            if(window.videoData.find(e => e.uuid === video.uuid)){
                const request = new XMLHttpRequest()
                request.open("GET","/video/"+video.name,false);
                request.send();
                if(request.response instanceof Blob){
                    const objectURL = URL.createObjectURL(request.response)
                    this.map[video.uuid] = objectURL ;
                    return objectURL;
                } else {
                    throw "request response is not blob"
                }
            } else {
                throw "video not found in videodata"
            };
        }
    }
}