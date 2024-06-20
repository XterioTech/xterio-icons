import React from 'react';
import PropTypes from 'prop-types';

const IconTxSuccessScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          fill="url(#paint0_linear_1_466)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7 9.75l-5.162 5.163a.937.937 0 01-1.326 0L7.3 12l1.326-1.326 2.25 2.25 4.5-4.5 1.326 1.326z"
          fill="#0A1161"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_466"
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

export default IconTxSuccessScalable;
