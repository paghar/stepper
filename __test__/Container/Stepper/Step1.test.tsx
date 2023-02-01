import renderer from "react-test-renderer";
import Step1 from "../../../src/container/stepper/Step1";
import {Provider} from "react-redux";

import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore();

jest.mock("next/router", () => ({
    useRouter: jest.fn()
}));

describe(">>>> Stepper", () => {
    test("++++ Snapshot of Stepper1 form", () => {       
        const component = renderer.create(
            <Provider store={store}>
                <Step1/>
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

export {};

