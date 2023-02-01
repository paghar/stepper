import renderer from "react-test-renderer";
import Step4 from "../../../src/container/stepper/Step4";
import {Provider} from "react-redux";

import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore();

jest.mock("next/router", () => ({
    useRouter: jest.fn()
}));

describe(">>>> Stepper", () => {
    test("++++ Snapshot of Stepper4 form", () => {       
        const component = renderer.create(
            <Provider store={store}>
                <Step4/>
            </Provider>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

export {};

