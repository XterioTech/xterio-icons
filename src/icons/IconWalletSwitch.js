import React from 'react';
import PropTypes from 'prop-types';

const IconWalletSwitch = props => {
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
        d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535 1.414-1.414zm-8.1-10l1.414 1.414-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"
        fill="currentColor"
      />
    </svg>
  );
};

IconWalletSwitch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconWalletSwitch;
