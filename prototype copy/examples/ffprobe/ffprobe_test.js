import ffprobe from 'ffprobe';
import { path as ffprobePath } from 'ffprobe-static';

ffprobe("public/video/video1.ogv",{path:ffprobePath},(err,data)=>{
    console.log(err,data)
})