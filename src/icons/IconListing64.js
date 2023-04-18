import React from 'react';
import PropTypes from 'prop-types';

const IconListing64 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <svg
        width="64"
        height="64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32 56c13.255 0 24-10.745 24-24S45.255 8 32 8 8 18.745 8 32s10.745 24 24 24z"
          fill="url(#paint0_linear_222_860)"
        />
        <path
          d="M38.046 29.244L36.795 27.1l-1.317 2.106-.35.562a3.687 3.687 0 01-6.254 0l-.352-.562-1.316-2.106-1.251 2.145-.244.418a3.705 3.705 0 01-3.2 1.838c-2.587 0-4.377-2.584-3.469-5.006L22.04 18.5h19.92l2.999 7.994c.908 2.422-.882 5.006-3.47 5.006-1.317 0-2.535-.7-3.2-1.838l-.243-.418z"
          stroke="#0A1161"
          strokeWidth="3"
        />
        <path d="M21 31v12h11.5" stroke="#0A1161" strokeWidth="3" />
        <path d="M18 43h15" stroke="#0A1161" strokeWidth="3" />
        <path
          d="M37 38.182L39 40l4-4"
          stroke="#0A1161"
          strokeWidth="3"
          strokeLinecap="square"
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_860"
            x1="8"
            y1="32.828"
            x2="56"
            y2="32.828"
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

IconListing64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconListing64.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconListing64;
