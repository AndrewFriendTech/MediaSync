/**
 * removes slashes ("/") from string and replaces them with %2F"
 * prevents attacks on file system access 
 * @param {string} oldString string to escape
 * @returns {string} escaped string
 */
export function escapeSlashes(oldString){
    let newString = "";
    for(let ch of oldString){
        newString += (ch === "/")?"%2F":ch;
    }
    return newString;
}