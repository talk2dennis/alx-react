import React from 'react';
import {shallow} from 'enzyme';
import CourseListRow from './CourseListRow';


describe('<CourseListRow />', () => {
  it('renders a <CourseListRow /> component', () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a <CourseListRow /> component and checks for a th', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First" />);
    expect(wrapper.find('th')).toHaveLength(1);
  });

  it('renders a <CourseListRow /> component and checks for a td', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First" />);
    expect(wrapper.find('td')).toHaveLength(1);
  });
});