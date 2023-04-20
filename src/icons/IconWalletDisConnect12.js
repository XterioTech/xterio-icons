import React from 'react';
import PropTypes from 'prop-types';

const IconWalletDisConnect12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <g clipPath="url(#clip0_222_777)">
          <mask
            id="a"
            style={{ maskType: 'alpha' }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="12"
            height="12"
          >
            <path
              d="M11.25.75H.75v10.5h10.5V.75z"
              fill="#D9D9D9"
              stroke="#FEFEFE"
              strokeWidth="1.5"
            />
          </mask>
          <g mask="url(#a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.928 1.785l-1.06 1.06 1.06 1.061 1.06-1.06A2.25 2.25 0 119.17 6.028l-1.06 1.06 1.06 1.06 1.061-1.06a3.75 3.75 0 10-5.303-5.303zM2.083 4.629L.996 3.542l1.06-1.06 7.425 7.424-1.06 1.06-1.035-1.033-.337.337a3.75 3.75 0 11-5.303-5.303l.337-.338zm4.243 4.243l-.338.338a2.25 2.25 0 11-3.182-3.182l.338-.338 3.182 3.182z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_222_777">
            <path fill="#fff" d="M0 0h12v12H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconWalletDisConnect12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletDisConnect12;
