import {Bulb} from "../src/Bulb";

export class BulbStub implements Bulb {
    public turnOnWasCalled = false;
    public turnOffWasCalled = false;

    turnOn(): void {
        this.turnOnWasCalled = true;
    }

    turnOff(): void {
        this.turnOffWasCalled = true;
    }
}
