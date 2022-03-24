var State;
(function (State) {
    State[State["stopped"] = 0] = "stopped";
    State[State["playing"] = 1] = "playing";
})(State || (State = {}));
export class Stopwatch {
    constructor() {
        this.timeElapsed = 0;
        this.state = State.stopped;
        this.time = {
            // (((new Date()).getTime() - this.lastStart) + this.timeElapsed) is milliseccond time if playing
            seconds: () => this.time.milliseconds() / 1000,
            minutesAndSeconds: () => {
                let milliseconds = this.time.milliseconds();
                let minutes = Math.floor((milliseconds / 1000) / 60);
                return {
                    minutes,
                    seconds: (milliseconds / 1000) - (minutes * 60)
                };
            },
            milliseconds: () => {
                if (this.state == State.playing) {
                    return (((new Date()).getTime() - this.lastStart) + this.timeElapsed);
                }
                else {
                    return this.timeElapsed;
                }
            }
        };
    }
    play() {
        if (this.state == State.stopped) {
            this.lastStart = (new Date()).getTime();
            this.state = State.playing;
        }
    }
    pause() {
        if (this.state == State.playing) {
            this.timeElapsed += (new Date()).getTime() - this.lastStart;
            this.state = State.stopped;
        }
    }
}
