class LockControl {
    constructor() {
    }

    init() {
        console.log("Initialising lock")
    }

    open(){
        console.log("Open lock");
        setTimeout(this.close, 1000);
    }

    close(){
        console.log("Close lock")
    }
}

export { LockControl };
