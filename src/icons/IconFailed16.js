import React from 'react';
import PropTypes from 'prop-types';

const IconFailed16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
    >
      <svg
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_222_815)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.293-2.293L9.414 8l2.293 2.293-1.414 1.414L8 9.414l-2.293 2.293-1.414-1.414L6.586 8 4.293 5.707l1.414-1.414L8 6.586l2.293-2.293 1.414 1.414z"
            fill="#E6B1F7"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_815">
            <path fill="#fff" d="M0 0h16v16H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconFailed16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFailed16;
