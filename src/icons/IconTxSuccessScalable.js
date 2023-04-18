import React from 'react';
import PropTypes from 'prop-types';

const IconTxSuccessScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          fill="url(#paint0_linear_222_899)"
        />
        <path
          d="M8.625 12l2.25 2.25 4.5-4.5"
          stroke="#0A1161"
          strokeWidth="1.875"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_899"
            x1="3"
            y1="12.31"
            x2="21"
            y2="12.31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#9EE6FC" />
            <stop offset="1" stopColor="#EBB9E7" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconTxSuccessScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconTxSuccessScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconTxSuccessScalable;
