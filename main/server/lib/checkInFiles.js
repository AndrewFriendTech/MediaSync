import {readdirSync} from 'fs'
/**
 * strips prexisting extension, then finds unique one
 * @param {string} filename 
 * @param {string} path 
 * @param {string} extension
 * @returns {string}
 */
export function getUniqueFileName(filename,path,extension){
    let fileList = readdirSync(path);
    let fileNumber = 1;
    
    //find index of last dot
    let indexOfLastDot = null;
    for(let i = filename.length-1; i >= 0 ; i--){
        if(filename.charAt(i) === ".") indexOfLastDot =  i;
    }
    //strips file extension if has one
    if(indexOfLastDot)
        filename = filename.slice(0,indexOfLastDot);
    //cycle through until filename is one that does not clash
    
    let newFilename = filename +"."+extension
    while(fileList.includes(newFilename)){
        newFilename = `${filename}(${fileNumber}).${extension}`
        fileNumber++
    }
    return newFilename
}

