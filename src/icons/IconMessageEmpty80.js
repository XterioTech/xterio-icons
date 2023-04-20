import React from 'react';
import PropTypes from 'prop-types';

const IconMessageEmpty80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.919 19.932l-1.656.109C28.624 20.675 21 28.699 21 38.5v15.665L17.287 60h44.426L58 54.165V38.5c0-9.52-7.194-17.365-16.44-18.387l-1.642-.181zM69 64H10l7-11V38.5c0-11.922 9.273-21.679 21-22.45V8l4-1v9.137C53.25 17.381 62 26.92 62 38.5V53l7 11zm-39 4h22l-2 4H28l2-4zm9-38a8 8 0 00-8 8v1l-4 3v-4c0-6.627 5.373-12 12-12v4z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconMessageEmpty80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageEmpty80;
