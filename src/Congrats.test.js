import React from 'react';
import Enzyme, { shallow } from 'enzyme';

import {findByTestAttr, checkProps} from '../test/testUtils';
import Congrats from './Congrats';

const defaultProps = {sucsess: false };

/**
 * Factory function to create a ShallowWratter for the Congats component
 * @function setup 
 * @param {object} props 
 * @returns {ShallowWrapper} props - Component props specific to this setup.
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<Congrats {...setupProps}/>)
} 

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});
test('renders no text when "unsuccess" prop is false', () => {
    const wrapper = setup({ sucsess: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe("");
});
test('renders non-empty congrsts message when success prop is true', () => {
    const wrapper = setup({ sucsess: true });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
    const expectedProps = {sucsess: false};
    checkProps(Congrats, expectedProps);
})
