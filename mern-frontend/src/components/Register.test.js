import React from 'react';
import { shallow, mount } from 'enzyme';
import Register from './Register';
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});

describe('<Register />', () => {
   /* const wrapper = shallow(<Register />);*/
    const testValues = {
        name: 'testName',
        email: 'testEmail2test.com',
        password: '1234567',
        password2: '1234567'
    };

    test('inputs are OK', () => {
        const component = mount(<Register store={store}/>);
        expect(component.find('.form-register'));
        component.setState({
            name: testValues.name,
            email: testValues.email,
            password: testValues.password,
            password2: testValues.password2
        });
        expect(component.state('name')).toEqual('testName');
        expect(component.state('email')).toEqual('testEmail2test.com');
        expect(component.state('password')).toEqual('1234567');
        expect(component.state('password2')).toEqual('1234567');
    });

    test('onChange is called', ()=> {
        const value = 'Testing Name';

        const component = shallow(<Register store={store} />);
        const result = component.find('#name').at(0);
        result.simulate('change', {target : {
                name: 'email',
                value: value
            }});

     /*   result.prop('onChange',{target : {
                name: 'email',
                value: value
            }} )*/
        expect(component.state('name')).toEqual(value);

       /* expect(component.find('.form-register'));*/
        /*component.setState({
            name: testValues.name,
            email: testValues.email,
            password: testValues.password,
            password2: testValues.password2
        });*/

    })

});
