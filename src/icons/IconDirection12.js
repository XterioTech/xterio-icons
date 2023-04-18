import React from 'react';
import PropTypes from 'prop-types';

const IconDirection12 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_780)">
          <mask
            id="a"
            style={{maskType: 'alpha'}}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="12"
            height="12"
          >
            <path d="M12 12V0H0v12h12z" />
          </mask>
          <g mask="url(#a)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 11.043l4.95-4.95-1.415-1.414-3.243 3.243V.851h-2v7.071L1.55 4.679.136 6.094l4.95 4.95a1 1 0 001.413 0z"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_222_780">
            <rect width="12" height="12" transform="rotate(180 6 6)" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconDirection12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconDirection12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconDirection12;
