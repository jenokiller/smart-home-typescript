import {LightSwitch} from './LightSwitch'
import {Bulb} from './Bulb'


export class SmartHome {
    private lightSwitch: LightSwitch;
    private bulb: Bulb;

    constructor(lightSwitch: LightSwitch, bulb: Bulb) {
        this.lightSwitch = lightSwitch;
        this.bulb = bulb;
    }

    run() {
        if (this.lightSwitch.isOn()) {
            this.bulb.turnOn();
        } else {
            this.bulb.turnOff();
        }
    }
}
