/**
 * 
 * @returns {[Video]} array of fetched videos  
 */
export function getVideos(){
        const request = new XMLHttpRequest()
        request.open("GET","/video",false)
        request.send() 
        return JSON.parse(request.response)
}