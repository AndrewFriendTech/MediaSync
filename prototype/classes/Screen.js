import { Section } from "./Section.js"
import { Video } from "./Video.js"

class MediaScreen{
    #sections
    #socket = null
    #playing = false
    #started = false
    /**
     * @type {[MirrorScreen]}
     */
    #mirrors = []
    /**
     * 
     * @param {[Section]} sections 
     */
    constructor(sections){
        console.log("section",sections)
        this.#sections = sections;
        this.ready = false;       
    }

    registerSocket(socket){
       if(!this.#socket){
           this.#socket = socket;
       } else {
            throw new SocketAlreadyAttachedError();
       }
    }

    deregisterSocket(){
        this.#socket = null;
    }

    play(){
        this.#playing = true;
        this.#started = true;
        this.#mirrors.forEach(mirror => mirror.play());
    }

    pause(){
        this.#playing = false;
        this.#mirrors.forEach(mirror => mirror.play())
    }

    /**
     * 
     * @param {MirrorScreen} mirror 
     */
    registerMirror(mirror){
        this.#mirrors.push(mirror);
    }

    get playing(){
        return this.#playing
    }

    get started(){
        return this.#started;
    }
    
    get sections(){
        return this.#sections;
    }

    /**
     * @returns {[Video]}
     */
    get videos(){
        let videoArr = [];
        
        function arrayContains(array,object){
            for(let element of array)
                if(Object.is(object,element)) return true;
            return false
        }

        this.#sections.forEach(section =>{
            if(!arrayContains(videoArr,section.video)){
                videoArr.push(section.video)
            }
        })
        return videoArr;
    }
}

class MirrorScreen extends MediaScreen{
    /**
     * 
     * @param {MediaScreen} master 
     */
    constructor(master){
        super(master.sections)
        if(!(master instanceof MediaScreen)) throw new TypeError("argument is not MediaScreen");
        master.registerMirror(this);
    }
}

class SocketAlreadyAttachedError extends Error {
    constructor(){
        super("Socket already attached to screen");
    }
}

export {MediaScreen,MirrorScreen,SocketAlreadyAttachedError};
