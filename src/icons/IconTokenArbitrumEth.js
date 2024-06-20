import React from 'react';
import PropTypes from 'prop-types';

const IconTokenArbitrumEth = props => {
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
      <g clipPath="url(#clip0_1_632)">
        <circle cx="12" cy="12" r="12" fill="#ECEFF0" />
        <path
          d="M11.696 4l4.911 8.173-4.91 2.916-4.912-2.916L11.696 4z"
          fill="#2F3030"
        />
        <path d="M11.696 4l-4.911 8.173 4.911 2.916V4z" fill="#828384" />
        <path
          d="M11.696 20l4.912-6.907-4.912 2.878-4.91-2.878L11.695 20z"
          fill="#2F3030"
        />
        <path d="M11.696 20l-4.91-6.907 4.91 2.878V20z" fill="#828384" />
        <path
          opacity="0.6"
          d="M11.696 9.909l4.912 2.263-4.912 2.917-4.91-2.917 4.91-2.263z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_632">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

IconTokenArbitrumEth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenArbitrumEth;
