import { Video, VideoNotFoundError,ffprobeError } from "../classes/Video.js";
import { Section, VideoRangeError } from "../classes/Section.js";
import { MediaScreen,MirrorScreen } from "../classes/Screen.js";

/**
 * Generates an array of MediaScreen objects 
 * @param {Object} init 
 * @returns {[MediaScreen]}
 */
function generateScreens(init){
    const screens = [];
    const videos = {};
    init.screens.every((screen,screenIndex)=>{
        const sections = [];
        if(screen.mirror !== undefined){
            console.log("has mirror")
            if(screens[screenIndex-1] instanceof MediaScreen && (screenIndex - 1) >= 0){
                screens.push(new MirrorScreen(screens[screenIndex-1]))
            } else{
                console.error(`screen ${screenIndex} previous screen is null or this is the first screen, can not mirror.`);
            }
        } else{
            screen.content.every((content,contentIndex) =>{
                let video; 
                if(!videos[content.src]){
                    
                    try {
                        video = new Video(content.src,process.cwd() + init.videoDirectory)    
                    } catch (error) {
                        if(error instanceof VideoNotFoundError){
                            console.error(`screen ${screenIndex}, section ${contentIndex}|`,
                                        `Video '${content.src}' not found in '${init.videoDirectory}'.`,
                                        `screen ${screenIndex} will be null `);
                            screens.push(null);
                        } else throw error; 
                        //breaks loop
                        return false;
                    }
                } else {
                    video = videos[content.src];
                }
    
    
                let section;
                try {
                   
                    section = new Section(video,content.start,content.end);     
                } catch (error) {
                    if( error instanceof VideoRangeError){
                        console.error(`screen ${screenIndex}, section ${contentIndex}|`
                                    `Start or end is out of range of video`)
                        return false;
                    }
                }
                sections.push(section);
               
                return true;     
            })
            screens.push(new MediaScreen(sections));
        }
        return true;
        
    })
    return screens;
}

export {generateScreens};