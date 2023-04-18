import React from 'react';
import PropTypes from 'prop-types';

const IconCongratulate80 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M62.611 36.747c-.488 1.7-2.54 3.432-6.775 4.222-4.083.762-9.507.471-15.251-1.176-5.744-1.647-10.498-4.275-13.557-7.084-3.173-2.915-3.996-5.47-3.508-7.172.488-1.7 2.54-3.432 6.775-4.223 4.083-.76 9.507-.47 15.251 1.177s10.498 4.275 13.557 7.084c3.173 2.914 3.996 5.47 3.508 7.172z"
          stroke="#FEFEFE"
          strokeWidth="4.667"
        />
        <path
          d="M23.62 27.458l4.867 44.771c.03.282.377.4.573.195l32.102-33.632"
          stroke="#FEFEFE"
          strokeWidth="4.667"
        />
        <path
          d="M25.334 47a28.867 28.867 0 0021.345 6.402l.655-.069"
          stroke="#FEFEFE"
          strokeWidth="4.667"
        />
        <path
          d="M52.603 10.667l-.27.581a3.451 3.451 0 01-3.128 1.993h-1.013a1.896 1.896 0 00-.962 3.529l4.95 2.919a2.012 2.012 0 01-1.73 3.616l-3.846-1.446a1.934 1.934 0 00-2.376 2.74l.99 1.807a2.602 2.602 0 01-3.753 3.397l-.933-.64"
          stroke="#121233"
          strokeWidth="8.667"
        />
        <path
          d="M52.603 10.667l-.27.581a3.451 3.451 0 01-3.128 1.993h-1.013a1.896 1.896 0 00-.962 3.529l4.95 2.919a2.012 2.012 0 01-1.73 3.616l-3.846-1.446a1.934 1.934 0 00-2.376 2.74l.99 1.807a2.602 2.602 0 01-3.753 3.397l-.933-.64"
          stroke="#FEFEFE"
          strokeWidth="3.667"
        />
        <path
          d="M52 36c2.333-3.556 9.4-10.933 19-12"
          stroke="#121234"
          strokeWidth="9.333"
        />
        <path
          d="M52 36c2.333-3.556 9.4-10.933 19-12"
          stroke="#FEFEFE"
          strokeWidth="4.667"
        />
        <path
          d="M32.14 28.69c1.098-4.131 1.542-13.767-5.474-19.263"
          stroke="#121234"
          strokeWidth="9.333"
        />
        <path
          d="M32.14 28.69c1.098-4.131 1.542-13.767-5.474-19.263"
          stroke="#FEFEFE"
          strokeWidth="4.667"
        />
      </svg>
    </svg>
  );
};

IconCongratulate80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCongratulate80.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCongratulate80;
