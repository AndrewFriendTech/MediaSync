import { Section } from "./Section.js"

class MediaScreen{
    #sections
    #socket = null
    #playing = false
    /**
     * @type {[MirrorScreen]}
     */
    #mirrors = []
    /**
     * 
     * @param {[Section]} sections 
     */
    constructor(sections){
        this.#sections = sections;       
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
        return this.playing
    }
    
    get sections(){
        return this.#sections;
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
        new Error("Socket already attached to screen");
    }
}

export {MediaScreen,MirrorScreen,SocketAlreadyAttachedError};
