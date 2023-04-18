import React from 'react';
import PropTypes from 'prop-types';

const IconInfo16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_222_816)" fill="#E6B1F7">
          <path d="M9 10H7v2h2v-2z" />
          <path d="M9 4H7v5h2V4z" />
        </g>
        <defs>
          <clipPath id="clip0_222_816">
            <rect width="16" height="16" fill="#fff" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconInfo16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconInfo16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconInfo16;
