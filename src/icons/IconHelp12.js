import React from 'react';
import PropTypes from 'prop-types';

const IconHelp12 = props => {
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
      <mask
        id="a"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="12"
        height="12"
      >
        <path fill="#D9D9D9" d="M0 0h12v12H0z" />
      </mask>
      <g mask="url(#a)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10z"
          fill="currentColor"
        />
        <path
          d="M4.5 5l.75-.75a1.06 1.06 0 011.5 0v0a1.06 1.06 0 010 1.5L6 6.5v1M6 8v1"
          stroke="#FEFEFE"
        />
      </g>
    </svg>
  );
};

IconHelp12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHelp12;
