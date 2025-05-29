import React from 'react';
import PropTypes from 'prop-types';

const IconSend = props => {
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
        d="M3.009 19.5L21 12 3.009 4.5 3 10.333 15.857 12 3 13.667l.009 5.833z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSend.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSend;
