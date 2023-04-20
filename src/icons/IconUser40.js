import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconUser40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <g clipPath="url(#clip0_222_923)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 12a4 4 0 00-4 4v.508c0 .904.359 1.77.998 2.409l.59.59a3.68 3.68 0 011.079 2.604 5.469 5.469 0 01-3.225 4.987L12.7 28.332c-.742.334-1.417.8-1.993 1.375l-.707.707L8.586 29l.707-.707a8.717 8.717 0 012.586-1.785l2.742-1.234a3.469 3.469 0 002.046-3.163c0-.446-.177-.874-.493-1.19l-.59-.59A5.407 5.407 0 0114 16.508V16a6 6 0 1112 0v.508c0 1.434-.57 2.81-1.583 3.823l-.591.59a1.681 1.681 0 00-.492 1.19c0 1.365.8 2.603 2.045 3.163l2.742 1.234a8.718 8.718 0 012.586 1.785l.707.707L30 30.414l-.707-.707a6.714 6.714 0 00-1.993-1.375l-2.742-1.234a5.469 5.469 0 01-3.224-4.987 3.68 3.68 0 011.078-2.603l.59-.591A3.406 3.406 0 0024 16.508V16a4 4 0 00-4-4z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_923">
            <path fill="#fff" d="M0 0h40v40H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconUser40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUser40;
