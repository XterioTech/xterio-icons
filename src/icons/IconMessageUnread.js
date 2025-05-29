import React from 'react';
import PropTypes from 'prop-types';

const IconMessageUnread = props => {
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
        d="M6.66 3A8 8 0 0117.59 5.928l3.5 6.062 1.731-1 1 1.733-17.32 10-1-1.733 1.733-1-3.5-6.062A8 8 0 016.66 3zm13.098 16.686l-5.195 3-1-1.732 5.195-3 1 1.732zM15.857 6.928a6 6 0 00-10.393 6l3.5 6.062 10.393-6-3.5-6.062zM12.78 7.94l-.668 2.495 2.495.668-.45 1.68-.483-.13-2.012-.539-.539 2.011-.129.483-1.678-.45.668-2.494-2.495-.669.45-1.678 2.495.668.669-2.494 1.677.45zm-4.678 2.702l2.495.668-.67 2.495.714.191-.712-.191.668-2.495-2.494-.668.19-.712-.191.712z"
        fill="currentColor"
      />
    </svg>
  );
};

IconMessageUnread.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageUnread;
