import React from 'react';
import PropTypes from 'prop-types';

const IconLang32 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10zm0 2c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.8 17H5.2v-2h21.6v2z"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.454 23.59C19.374 21.753 20 19.07 20 16c0-3.07-.627-5.752-1.546-7.59C17.474 6.45 16.49 6 16 6c-.491 0-1.474.45-2.454 2.41C12.626 10.247 12 12.93 12 16c0 3.07.627 5.752 1.546 7.59C14.526 25.55 15.51 26 16 26c.491 0 1.474-.45 2.454-2.41zM16 28c3.314 0 6-5.373 6-12S19.314 4 16 4s-6 5.373-6 12 2.686 12 6 12z"
        />
      </svg>
    </svg>
  );
};

IconLang32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconLang32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconLang32;
