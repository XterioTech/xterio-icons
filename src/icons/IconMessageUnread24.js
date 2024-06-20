import React from 'react';
import PropTypes from 'prop-types';

const IconMessageUnread24 = props => {
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
        d="M10.378 2.082L8.705 3.565l.529 1.974a7.001 7.001 0 00-4.003 8.246l1.043 3.89-.571 3.26 16.217-4.346-2.123-2.537-1.043-3.89a7.002 7.002 0 00-7.589-5.14l-.787-2.94zm-.358 5.297l.666-.285.718-.087a5.002 5.002 0 015.419 3.673l1.156 4.317.395.471-10.16 2.723.106-.606-1.157-4.317a5.001 5.001 0 012.857-5.89zm5.504 12.218L10.287 21l-.71 2.002 5.238-1.403.709-2.002z"
        fill="currentColor"
      />
    </svg>
  );
};

IconMessageUnread24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageUnread24;
