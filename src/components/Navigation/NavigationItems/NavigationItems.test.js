import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('<NaviationsItems />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />); // shallow will render the component without rendering its nested components.
  });
  it('should render two <NavigationItem /> elements if not authenticated', () => {
    //writing isolated unit without the need to run the entire app using Enzime
    expect(wrapper.find(NavigationItem)).toHaveLength(2); // expected / correct value to find 2 NavigationItem components
  }); //allows to you write one individual test

  it('should render three <NavigationItem /> elements if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it('should render three <NavigationItem /> elements if authenticated', () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>) // that the logout botton renders when the user is logged in.
    ).toEqual(true);
  });
});
