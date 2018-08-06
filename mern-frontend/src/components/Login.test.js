import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Email input', ()=>{
    it('should respond to change event and change the state of the Login Component', ()=>{
        const wrapper = shallow(<Provider store={store}><Login/></Provider>);
        wrapper.find('input.testEmail').simulate('onchange', {target: {name:'email', value: 'vlad.timofeev97@gmail.com'}});

        expect(wrapper.state('email')).toEqual('vlad.timofeev97@gmail.com');
    })
});

describe('Password input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<Provider><Login /></Provider>  );
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

        expect(wrapper.state().password).toEqual('cats');
    })
});