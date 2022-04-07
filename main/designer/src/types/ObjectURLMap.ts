import {Video} from 'Video.js'

export class ObjectURLMap{
    private map:any;

    constructor(){
        this.map = {}
    }

    load(videos:Video[]):void{
        videos.forEach(()=>this.get);
    }

    set(uuid:string,blob:Blob):void{
        let objectURL = URL.createObjectURL(blob)
        this.map[uuid] = objectURL;
    }
    
    get(video:Video):string{
        console.log(video.uuid)
        console.log(JSON.stringify(this.map))
        if(this.map[video.uuid]){
            return this.map[video.uuid];
        } else {
            throw "video not found"
        }
    }
}