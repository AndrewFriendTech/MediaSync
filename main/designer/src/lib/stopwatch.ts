
enum State{
    stopped,
    playing
}

export class Stopwatch{
    private lastStart:number;
    private timeElapsed  = 0;
    private state:State = State.stopped;
    play(){
        if(this.state == State.stopped){
            this.lastStart = (new Date()).getTime();
            this.state = State.playing;
        }
    }
    pause(){
        if(this.state == State.playing){
            this.timeElapsed += (new Date()).getTime() - this.lastStart;
            this.state = State.stopped
        }
    }

    time = {
        // (((new Date()).getTime() - this.lastStart) + this.timeElapsed) is milliseccond time if playing
        seconds: ():number=> this.time.milliseconds()/1000 ,
        minutesAndSeconds: ():{minutes:number,seconds:number}=> {
            let milliseconds = this.time.milliseconds()
            let minutes = Math.floor((milliseconds / 1000)/ 60)
            return {
                minutes,
                seconds:(milliseconds / 1000) - (minutes * 60)
            }
        },
        milliseconds: ():number =>{
            if(this.state == State.playing){
                return (((new Date()).getTime() - this.lastStart) + this.timeElapsed)
            } else {
                return this.timeElapsed;
            }
        }
        
    }
}