import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
/**
 * Factory function to create a ShallowWratter for the Congats component 
 * @param {ShallowWrapper} Wrapper - Enzyme shallow wrapper. 
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, expectedProps) => {
    console.log(expectedProps)
    const propError = checkPropTypes(
        component.propTypes,
        expectedProps,
        'prop',
        component.name);
    
    expect(propError).toBeUndefined();
}