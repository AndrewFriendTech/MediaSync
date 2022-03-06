/**
 * returns an Array of all elements of the class , 
 * removing any that contain "template" as a co-class
 * @param {string} className class to find 
 * @returns {Element[]} 
 */
export function elementsOfClass(className:string){
  const elements = Array.from(document.getElementsByClassName(className))
    .filter(element => !(element.classList.contains("template")))
  if(elements.length === 0) 
    console.log(`no elements of class"${className}"`);
  return elements;
}