import renderer from "react-test-renderer";
import Stepper from "../../src/components/stepper/Stepper";
import {stepItems} from "../../src/data/constants";

describe(">>>> Stepper", () => {
    test("++++ Snapshot of Stepper 1", () => {
        const component = renderer.create(
            <Stepper
                stepprNumber={4}
                currentStep={1}
                stepItems={stepItems}
            />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe(">>>> Stepper", () => {
    test("++++ Snapshot of Stepper 3", () => {
        const component = renderer.create(
            <Stepper
                stepprNumber={4}
                currentStep={3}
                stepItems={stepItems}
            />
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

export {};