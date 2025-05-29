import React from 'react';
import PropTypes from 'prop-types';

const IconBankCardConnected = props => {
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
        d="M3.005 3h18a1 1 0 011 1v16a1 1 0 01-1 1h-18a1 1 0 01-1-1V4a1 1 0 011-1zm17 8h-16v8h16v-8zm0-2V5h-16v4h16z"
        fill="currentColor"
      />
      <path
        d="M18.023 12.395l.583.587.105.106-.105.106-4.375 4.411-.106.108-.106-.108-2.625-2.646-.105-.107.105-.105.583-.588.106-.107.107.107 1.934 1.951 3.687-3.715.106-.108.106.107z"
        fill="currentColor"
        stroke="#FEFEFE"
        strokeWidth="0.3"
      />
    </svg>
  );
};

IconBankCardConnected.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBankCardConnected;
