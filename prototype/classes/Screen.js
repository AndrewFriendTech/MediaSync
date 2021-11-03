import { Section } from "./Section"

class Screen{
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



}

class MirrorScreen extends Screen{
    constructor(sections,master){

    }
}

class SocketAlreadyAttachedError extends Error {
    constructor(){
        new Error("Socket already attached to screen");
    }
}