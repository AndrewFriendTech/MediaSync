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


### From Server to Clients

#### `videos`
