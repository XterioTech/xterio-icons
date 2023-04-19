import React from 'react';
import PropTypes from 'prop-types';

const IconTxSuccessScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.7 9.75l-5.162 5.163a.938.938 0 01-1.326 0L7.299 12l1.326-1.326 2.25 2.25 4.5-4.5L16.7 9.75z"
          fill="#0A1161"
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
            <stop stop-color="#9EE6FC" />
            <stop offset="1" stop-color="#EBB9E7" />
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
