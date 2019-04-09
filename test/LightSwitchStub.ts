import {LightSwitch} from "../src/LightSwitch";

export class LightSwitchStub implements LightSwitch {
    public value = false;

    isOn(): boolean {
        return this.value;
    }
}
