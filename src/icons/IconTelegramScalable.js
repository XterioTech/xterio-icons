import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_375_15)'];

const IconTelegramScalable = props => {
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
      <path
        d="M9.772 18.19l.28-4.224 7.67-6.91c.339-.31-.07-.46-.52-.19l-9.468 5.982-4.094-1.299c-.88-.25-.89-.859.2-1.298l15.948-6.152c.73-.33 1.429.18 1.149 1.298L18.221 18.19c-.19.91-.74 1.129-1.498.71l-4.135-3.056L10.6 17.77c-.23.23-.42.42-.83.42z"
        fill={color || originFill[0]}
      />
      <defs>
        <linearGradient
          id="paint0_linear_375_15"
          x1="3"
          y1="11.813"
          x2="21"
          y2="11.813"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9EE6FC" />
          <stop offset="1" stopColor="#EBB9E7" />
        </linearGradient>
      </defs>
    </svg>
  );
};

IconTelegramScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTelegramScalable;
