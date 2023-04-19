import React from 'react';
import PropTypes from 'prop-types';

const originFill = ['url(#paint0_linear_222_911)'];

const IconFacebookScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
    >
      <svg>
        <path
          d="M12.49 12.526h2.28l.358-2.315H12.49V8.945c0-.962.314-1.815 1.214-1.815h1.446V5.11c-.254-.035-.791-.11-1.806-.11-2.12 0-3.364 1.12-3.364 3.67v1.54H7.8v2.316h2.18v6.365c.432.065.87.109 1.318.109.406 0 .802-.037 1.193-.09v-6.384z"
          fill={color || originFill[0]}
        />
        <defs>
          <linearGradient
            id="paint0_linear_222_911"
            x1="7.801"
            y1="12.241"
            x2="15.15"
            y2="12.241"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#9EE6FC" />
            <stop offset="1" stop-color="#EBB9E7" />
          </linearGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconFacebookScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFacebookScalable;
