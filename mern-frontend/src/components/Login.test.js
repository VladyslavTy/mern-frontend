import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('Login input', ()=>{

    const wrapper = shallow(<Login store={store}/>);
    it('email and password are OK', ()=>{
        wrapper.setState({email: 'testemail@test.com', password: 'password'});
        expect(wrapper.state('email')).toEqual('testemail@test.com');
        expect(wrapper.state('password')).toEqual('password');
    });

    /*it('onchange is ok', ()=>{

        wrapper.find('#testEmail').simulate('change', {
            target: {value: 'testemail@test.com'}
        })
    })*/
});

/*describe('Input onchange', ()=> {
    const wrapper = mount(<Login store={store}/>);
    it('email onchange OK',()=>{
        wrapper.find('#testEmail').simulate('change', {target: {value: 'testemail@test.com'}})
    })
});*/

/*
describe('Password input', () => {

    it('should respond to change event and change the state of the Login Component', () => {

        const wrapper = shallow(<Provider><Login /></Provider>  );
        wrapper.find('#password').simulate('change', {target: {name: 'password', value: 'cats'}});

        expect(wrapper.state().password).toEqual('cats');
    })
});*/
