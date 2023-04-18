import React from 'react';
import PropTypes from 'prop-types';

const IconOtherFill24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="#FEFEFE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M7 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        <path d="M17 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
      </svg>
    </svg>
  );
};

IconOtherFill24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconOtherFill24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconOtherFill24;
