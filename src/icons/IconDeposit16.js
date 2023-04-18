import React from 'react';
import PropTypes from 'prop-types';

const IconDeposit16 = props => {
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
          d="M9 1v6.586l2.293-2.293 1.414 1.414-4 4a1 1 0 01-1.414 0l-4-4 1.414-1.414L7 7.586V2l2-1zM4 9H1v6h14V9h-3v2h1v2H3v-2h1V9z"
        />
      </svg>
    </svg>
  );
};

IconDeposit16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconDeposit16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconDeposit16;