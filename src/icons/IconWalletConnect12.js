import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnect12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
    >
      <svg>
        <g clip-path="url(#clip0_222_775)">
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
              stroke-width="1.5"
            />
          </mask>
          <g mask="url(#a)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.707 6.702l3.736.163.65-.651a2.25 2.25 0 00-3.181-3.182l-.354.353-1.06-1.06.353-.354a3.75 3.75 0 115.304 5.303L9.037 8.392l-4.395-.191.065-1.499zm2.796-1.33H3.571l-.665.665A2.25 2.25 0 106.088 9.22l.354-.353 1.06 1.06-.353.354a3.75 3.75 0 01-5.304-5.303L2.95 3.872h4.553v1.5z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_222_775">
            <path fill="#fff" d="M0 0h12v12H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconWalletConnect12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnect12;
