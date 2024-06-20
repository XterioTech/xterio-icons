import React from 'react';
import PropTypes from 'prop-types';

const IconHolding40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '40.001953125'}
      height={size || '40'}
      viewBox="0 0 40.001953125 40"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5.563L7.695 11.1 20 16.637 32.304 11.1 20 5.563zM20 2.1l-20 9 20 9 20-9-20-9zM1.357 21.542l1.283-2.885 17.359 7.715 17.358-7.715 1.283 2.885-18.641 8.285-18.642-8.285zm1.283 7.115l-1.283 2.885L20 39.827l18.64-8.285-1.282-2.885L20 36.37l-17.36-7.714z"
        fill="currentColor"
      />
    </svg>
  );
};

IconHolding40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHolding40;
