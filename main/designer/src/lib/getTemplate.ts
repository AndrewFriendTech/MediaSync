/**
 * returns the template div for the class
 * @param {string} className 
 * @returns {HTMLElement} 
 */
export function getTemplate(className:string){
    const elements = document.getElementsByClassName(className);
    if(elements.length === 0) throw `no elements found of class "${className}"`
    const templates = Array.from(elements)
                        .filter(e => e.classList.contains("template"));                    
    if (templates.length === 0) throw `no template for class ${className}`
    else if (templates.length > 1) throw `multiple templates for ${className}`
    else{ 
        let newElement = elements[0].cloneNode(true) as HTMLElement;
        newElement.classList.remove("template")
        return newElement;
    };
}