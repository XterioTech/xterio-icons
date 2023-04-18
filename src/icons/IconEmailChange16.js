import React from 'react';
import PropTypes from 'prop-types';

const IconEmailChange16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5h10v2.066l2-2V3H1v11h5.066l2-2H3V5zm.895 2.978l.86-1.806 3.244 1.546 3.246-1.546.86 1.806-4.106 1.955-4.104-1.955zm11.469 2.436L13.95 9l-4.243 4.243v1.414h1.414l4.243-4.243z"
        />
      </svg>
    </svg>
  );
};

IconEmailChange16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconEmailChange16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconEmailChange16;
