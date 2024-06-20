import React from 'react';
import PropTypes from 'prop-types';

const IconHelp24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.793-12.793a1.121 1.121 0 00-1.586 0l-1.5 1.5-1.414-1.414 1.5-1.5a3.121 3.121 0 014.414 4.414L13 13.414V15h-2v-2.414l1.793-1.793a1.121 1.121 0 000-1.586zM11 16v2h2v-2h-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconHelp24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHelp24;
