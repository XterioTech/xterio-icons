import React from 'react';
import PropTypes from 'prop-types';

const IconTokenUsdt = props => {
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
      <circle cx="12" cy="12" r="12" fill="#4F9F7D" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.419 5.86v2.698h4.046v1.814c-1.488-.046-5.619.558-5.72 1.442-.14 1.21 4.092 1.674 5.72 1.674v5.721h2.931v-5.674c1.674-.031 5.58-.512 5.813-1.535.231-1.016-3.558-1.589-5.767-1.673V8.558l4.046.047V5.86H6.418zm7.023 4.698v1.954c-1.005.186-2.403.077-2.977 0v-1.934c-2.069.04-4.763.39-5.023 1.096-.38 1.032 4.232 1.396 6.744 1.396 1.752.062 5.442-.186 6.233-1.07.784-.877-2.965-1.433-4.977-1.442z"
        fill="#fff"
      />
    </svg>
  );
};

IconTokenUsdt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTokenUsdt;
