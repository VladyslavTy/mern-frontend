import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";

import Profile from './Profile';
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Profile', ()=> {
    /*it("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Profile />
                </Provider>
            ).exists(<h1>Test page</h1>)
        ).toBe(true);
    });*/
    test('Rendering the component', () => {
        const wrapper = shallow(
            <Provider store={store}>
            <Profile/>
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })
});