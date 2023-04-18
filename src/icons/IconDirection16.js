import React from 'react';
import PropTypes from 'prop-types';

const IconDirection16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="22.626953125"
      height="22.62744140625"
      viewBox="0 0 22.626953125 22.62744140625"
    >
      <svg width="23" height="23" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_801)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.22 17.969l6.468-6.47-1.438-1.437-4.733 4.734V4.733h-2.033v10.063L5.75 10.062 4.313 11.5l6.469 6.469c.397.397 1.04.397 1.437 0z"
          />
        </g>
        <defs>
          <clipPath id="clip0_222_801">
            <rect
              width="16"
              height="16"
              transform="rotate(-45 13.882 5.75) scale(1.01646)"
            />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconDirection16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconDirection16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconDirection16;
