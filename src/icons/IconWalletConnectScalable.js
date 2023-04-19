import React from 'react';
import PropTypes from 'prop-types';

const IconWalletConnectScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 1.8c5.634 0 10.2 4.566 10.2 10.2 0 5.634-4.566 10.2-10.2 10.2-5.634 0-10.2-4.566-10.2-10.2C1.8 6.366 6.366 1.8 12 1.8z"
          fill="url(#paint0_radial_222_892)"
        />
        <path
          d="M8.282 9.678c2.052-2.004 5.383-2.004 7.435 0l.247.243a.25.25 0 010 .363l-.845.825a.132.132 0 01-.187 0l-.339-.331a3.731 3.731 0 00-5.187 0l-.363.354a.132.132 0 01-.187 0l-.845-.824a.25.25 0 010-.363l.271-.267zm9.184 1.705l.753.734a.25.25 0 010 .362l-3.39 3.311c-.104.1-.272.1-.371 0l-2.407-2.35a.067.067 0 00-.091 0l-2.407 2.35c-.104.1-.27.1-.37 0L5.78 12.48a.25.25 0 010-.363l.753-.734c.103-.1.27-.1.37 0l2.407 2.351a.067.067 0 00.092 0l2.406-2.35c.104-.1.271-.1.37 0l2.407 2.35a.067.067 0 00.092 0l2.407-2.35c.111-.1.278-.1.382 0z"
          fill="#fff"
        />
        <defs>
          <radialGradient
            id="paint0_radial_222_892"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(20.4 0 0 20.4 1.8 12)"
          >
            <stop stop-color="#5D9DF6" />
            <stop offset="1" stop-color="#006FFF" />
          </radialGradient>
        </defs>
      </svg>
    </svg>
  );
};

IconWalletConnectScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletConnectScalable;
