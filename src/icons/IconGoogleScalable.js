import React from 'react';
import PropTypes from 'prop-types';

const IconGoogleScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="a"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="15"
          height="15"
        >
          <path
            d="M18.882 10.527H12.36v2.705h3.755c-.35 1.718-1.814 2.704-3.755 2.704A4.128 4.128 0 018.223 11.8a4.128 4.128 0 014.136-4.136c.987 0 1.878.35 2.578.922l2.036-2.036c-1.24-1.082-2.832-1.75-4.614-1.75a6.98 6.98 0 00-7 7c0 3.882 3.119 7 7 7 3.5 0 6.682-2.545 6.682-7 0-.414-.063-.86-.159-1.273z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path
            d="M4.723 15.936V7.664l5.409 4.136-5.41 4.136z"
            fill="#FBBC05"
          />
        </g>
        <mask
          id="b"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="15"
          height="15"
        >
          <path
            d="M18.882 10.527H12.36v2.705h3.755c-.35 1.718-1.814 2.704-3.755 2.704A4.128 4.128 0 018.223 11.8a4.128 4.128 0 014.136-4.136c.987 0 1.878.35 2.578.922l2.036-2.036c-1.24-1.082-2.832-1.75-4.614-1.75a6.98 6.98 0 00-7 7c0 3.882 3.119 7 7 7 3.5 0 6.682-2.545 6.682-7 0-.414-.063-.86-.159-1.273z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#b)">
          <path
            d="M4.723 7.664l5.409 4.136 2.227-1.941 7.636-1.24V4.163H4.723v3.5z"
            fill="#EA4335"
          />
        </g>
        <mask
          id="c"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="15"
          height="15"
        >
          <path
            d="M18.882 10.527H12.36v2.705h3.755c-.35 1.718-1.814 2.704-3.755 2.704A4.128 4.128 0 018.223 11.8a4.128 4.128 0 014.136-4.136c.987 0 1.878.35 2.578.922l2.036-2.036c-1.24-1.082-2.832-1.75-4.614-1.75a6.98 6.98 0 00-7 7c0 3.882 3.119 7 7 7 3.5 0 6.682-2.545 6.682-7 0-.414-.063-.86-.159-1.273z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#c)">
          <path
            d="M4.723 15.936l9.545-7.318 2.514.318 3.213-4.772v15.272H4.723v-3.5z"
            fill="#34A853"
          />
        </g>
        <mask
          id="d"
          style={{maskType: 'alpha'}}
          maskUnits="userSpaceOnUse"
          x="5"
          y="4"
          width="15"
          height="15"
        >
          <path
            d="M18.882 10.527H12.36v2.705h3.755c-.35 1.718-1.814 2.704-3.755 2.704A4.128 4.128 0 018.223 11.8a4.128 4.128 0 014.136-4.136c.987 0 1.878.35 2.578.922l2.036-2.036c-1.24-1.082-2.832-1.75-4.614-1.75a6.98 6.98 0 00-7 7c0 3.882 3.119 7 7 7 3.5 0 6.682-2.545 6.682-7 0-.414-.063-.86-.159-1.273z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#d)">
          <path
            d="M19.995 19.436L10.13 11.8l-1.273-.954 11.137-3.182v11.772z"
            fill="#4285F4"
          />
        </g>
      </svg>
    </svg>
  );
};

IconGoogleScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconGoogleScalable.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconGoogleScalable;
