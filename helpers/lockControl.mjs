import * as onoff from 'onoff'; //include onoff to interact with the GPIO

class LockControl {
    constructor() {
    }

    init() {
        console.log("Initialising lock");
        if(onoff.Gpio.accessible){
            this.gpio = new onoff.Gpio(4, 'out'); 
        }
    }

    open(){
        console.log("Open lock");
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(1);
        }
    }

    pulse(){
        console.log("Pulse lock");
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(1);
        }
        setTimeout(()=>{this.close();}, 1000);
    }

    close(){
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(0);
        }
        console.log("Close lock");
    }
}

export { LockControl };

