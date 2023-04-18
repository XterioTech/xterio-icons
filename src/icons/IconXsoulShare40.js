import React from 'react';
import PropTypes from 'prop-types';

const IconXsoulShare40 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.18 10.289L20 .577l16.82 9.712V29.71L20 39.423 3.18 29.71V10.29z"
          stroke="#7DD5F9"
        />
        <path
          d="M3.18 10.289L20 .577l16.82 9.712V29.71L20 39.423 3.18 29.71V10.29z"
          stroke="#7DD5F9"
        />
        <path d="M16 19l5-3" stroke="#7DD5F9" strokeWidth="2" />
        <path
          d="M23.5 18a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
          stroke="#7DD5F9"
          strokeWidth="2"
        />
        <path
          d="M13 24a3 3 0 100-6 3 3 0 000 6z"
          stroke="#7DD5F9"
          strokeWidth="2"
        />
        <path
          d="M23.5 29a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
          stroke="#7DD5F9"
          strokeWidth="2"
        />
        <path d="M21 26l-5-3" stroke="#7DD5F9" strokeWidth="2" />
      </svg>
    </svg>
  );
};

IconXsoulShare40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconXsoulShare40.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconXsoulShare40;
