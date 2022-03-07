import { Section } from "../../types/Section";
import { Video } from "../../types/Video";

//creates new blank section from video by default videos entire length
export function newSection(video:Video):Section{
    return {
        src:video.name,
        duration:video.duration,
        uuid:video.uuid,
        start:0
    }
}