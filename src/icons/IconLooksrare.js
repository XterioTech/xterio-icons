import React from 'react';
import PropTypes from 'prop-types';

const IconLooksrare = props => {
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
        <g clipPath="url(#clip0_0_688)">
          <path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#0CE466"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13.297a2.487 2.487 0 110-4.973 2.487 2.487 0 010 4.973zm-1.081-2.486a1.081 1.081 0 102.162 0 1.081 1.081 0 00-2.162 0z"
            fill="#000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 10.814l4.757-4.76h6.486L20 10.814l-8 7.997-8-7.997zm11.676-1.733a5.198 5.198 0 00-7.352 0l-1.73 1.73 1.73 1.73a5.198 5.198 0 007.352 0l1.73-1.73-1.73-1.73z"
            fill="#000"
          />
        </g>
        <defs>
          <clipPath id="clip0_0_688">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconLooksrare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLooksrare;
