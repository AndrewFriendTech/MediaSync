# Display File
## Sypnosis
The display file plans out how the display is executed.
## Example
      {
          "videoUUIDs":["c2769caa-2f96-45bc-8a5c-c7a6f2e6908a","10fda21c-4b58-4fed-9838-db7f24261dee"]
          "screens":[
              {
                  "content":[
                      {"src":"c2769caa-2f96-45bc-8a5c-c7a6f2e6908a","start":0,"length":30},
                      {"src":"10fda21c-4b58-4fed-9838-db7f24261dee","start":0,"length":30}
                  ]
              },
              {"mirror":0},
              {
                  "content":[{"src":10fda21c-4b58-4fed-9838-db7f24261dee","start":0,"length":30}]
              }
          ]
      }
## Format
The file is in the form of valid JSON object of the folling form
### Display file
     {
        "videoUUIDs":<[path]> uuids indentifiing the videos on server,
        "screens" [<screen>] an array of screen objects(detailed below)
     }
 
### Screen object
The screen object has 2 forms:

Either in the form of  form a "content" array({"content":<[content]> , with content objects in the form of:

      {
          "src":<uuid> of source video,
          "start":<number> time in secconds to start video section from , 
          "length":<number> number of secconds to run video for
       }
Or a "Mirror" object, of the form:
      {"mirror":<number> number of screen to mirror}
  
