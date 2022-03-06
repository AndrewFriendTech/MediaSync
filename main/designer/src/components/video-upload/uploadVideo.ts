export function uploadVideo(){
    let fileSelector = document.getElementById("video-upload-input") as HTMLInputElement
    if(fileSelector.files.length == 0){
      //TO:DO code to warn user of error
    } else {
      let file = fileSelector.files[0]
      if(file.type !== "video/mp4"){
        //TO:DO error
      } else{
        fetch(`/video/${file.name}`,{method:"PUT",body:file})
          .then(response => response.json())
          .then(console.log)
      }
    }
    
  }