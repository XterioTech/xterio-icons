import React from 'react';
import PropTypes from 'prop-types';

const IconPlus16 = props => {
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
          d="M7 2h2v12H7V9H2V7h5V2zm3 7h4V7h-3l-1 2z"
        />
      </svg>
    </svg>
  );
};

IconPlus16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconPlus16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconPlus16;
