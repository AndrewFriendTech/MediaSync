# Web socket api

## Events

### From Console to Server

#### `register-console`
##### body
Not Applicable
##### behaviour
Server will reply with current details about the registered screens and play time ( if not paused)
in format: 
    to-do json 

replies with error if object is already registered.

#### `play`
##### body
Not Applicable
##### behaviour
Starts or resumes the display.

#### `pause`
##### body
Not Applicable
##### behaviour
Stops the display.

#### `changeDisplay`
##### body
BSON file representing the display
##### behaviour
changes the display to the BSON file uploaded.

### From Server to Console

#### `devicedRegisted`

##### body
details about the the device in the following JSON format:
  to-do json


#### `deviceReady`
device is ready and will
##### body
details about the the device in the following JSON format:
  to-do json  
 




#### `jump`
##### body
number: place (in secconds) for the display to skip too 
##### behaviour 
jump to specified place in display
### From Server to Console



### From Clients to Server

#### `ready`
client has fully downloaded it's respective videos

#### `error`
client has an error


### From Server to Clients

#### `videos`
will contain a list of video objects of the format:
    [
        {uuid:<uuid>,path:<http path, should be a relative path>>},
        ...
    ]

#### `switch`
switch to a new screen of the display, contains an array simuluar to the video event. Pause current display, load new display and play unless a pause signal is revieved.
    
#### `play`
video to start playing
  
#### `pause`
video to pause

#### `skip`
will contain a number for the video to skip too
