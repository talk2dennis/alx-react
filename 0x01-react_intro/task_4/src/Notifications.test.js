import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications'


describe ('Describes the Notifications component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper).toHaveLength(1);
    });

    it('verify that Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3);
    });

    it('verify that Notifications renders the text  "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p')).toHaveLength(1);
        expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    });
});