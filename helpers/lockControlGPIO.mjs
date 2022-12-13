import * as onoff from 'onoff'; //include onoff to interact with the GPIO

class LockControl {
    constructor() {
    }

    init() {
        console.log("Initialising lock");
        this.gpio = new onoff.Gpio(4, 'out'); 
    }

    open(){
        console.log("Open lock");
        LED.writeSync(1);
        setTimeout(this.close, 1000);
    }

    close(){
        LED.writeSync(0);
        console.log("Close lock");
    }
}

export { LockControl };

