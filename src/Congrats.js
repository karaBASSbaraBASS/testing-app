import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if success prop is...)
 */
const Congrats = (props) => {
    if (props.sucsess) {
        return (
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You gussed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats"></div>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool,
}
// Congrats.propTypes = {
//     success: React.PropTypes.bool.isRequired,
// }

export default Congrats;