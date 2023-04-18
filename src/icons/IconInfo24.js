import React from 'react';
import PropTypes from 'prop-types';

const IconInfo24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_842)" stroke="#7DD5F9" strokeWidth="2">
          <path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z" />
          <path d="M12 17v-2" />
          <path d="M12 13V7" />
        </g>
        <defs>
          <clipPath id="clip0_222_842">
            <rect width="24" height="24" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconInfo24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconInfo24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconInfo24;
