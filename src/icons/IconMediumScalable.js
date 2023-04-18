import React from 'react';
import PropTypes from 'prop-types';

const IconMediumScalable = props => {
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
        <path d="M12.897 11.976c0 2.195-1.768 3.975-3.949 3.975-2.18 0-3.948-1.78-3.948-3.975C5 9.78 6.768 8 8.948 8c2.181 0 3.949 1.78 3.949 3.976zm4.331 0c0 2.066-.884 3.742-1.974 3.742-1.09 0-1.974-1.676-1.974-3.742 0-2.067.884-3.743 1.974-3.743 1.09 0 1.974 1.675 1.974 3.743zm1.772 0c0 1.85-.31 3.352-.694 3.352-.384 0-.695-1.5-.695-3.352 0-1.852.311-3.353.695-3.353.383 0 .694 1.5.694 3.353z" />
        <defs>
          <linearGradient
            id="paint0_linear_222_919"
            x1="5"
            y1="12.113"
            x2="19"
            y2="12.113"
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

IconMediumScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconMediumScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconMediumScalable;
