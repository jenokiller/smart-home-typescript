import {SmartHome} from '../src/smart-home'
import {LightSwitchStub} from "./LightSwitchStub";
import {BulbStub} from "./BulbStub";

describe('smartHome', () => {
    let lightSwitchStub: LightSwitchStub;
    let bulbStub: BulbStub;
    let smartHome: SmartHome;

    beforeEach(function () {
        lightSwitchStub = new LightSwitchStub();
        bulbStub = new BulbStub();
        smartHome = new SmartHome(lightSwitchStub, bulbStub);
    });

    describe('スイッチがオンの時', () => {
        it('turnOnが呼ばれていること', () => {
            lightSwitchStub.value = true;
            smartHome.run();
            expect(bulbStub.turnOnWasCalled).toEqual(true);
        });

        it('turnOffが呼ばれていないこと', () => {
            lightSwitchStub.value = true;
            smartHome.run();
            expect(bulbStub.turnOffWasCalled).toEqual(false);
        });
    });

    describe('スイッチがオフの時', () => {
        it('turnOnが呼ばれていないこと', () => {
            lightSwitchStub.value = false;
            smartHome.run();
            expect(bulbStub.turnOnWasCalled).toEqual(false);
        });

        it('turnOffが呼ばれていること', () => {
            lightSwitchStub.value = false;
            smartHome.run();
            expect(bulbStub.turnOffWasCalled).toEqual(true);
        });
    })
});
