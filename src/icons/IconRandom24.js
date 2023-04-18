import React from 'react';
import PropTypes from 'prop-types';

const IconRandom24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 9.25l-5 3.125v6.642l5-3.125V9.25zm-12 0l5 3.125v6.642l-5-3.125V9.25zM4 8l8-5 8 5v9l-8 5-8-5V8zm3.774 0L12 10.642 16.226 8 12 5.359 7.774 8zM15 15a1 1 0 100-2 1 1 0 000 2zm-6-2a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 100-2 1 1 0 000 2z"
        />
      </svg>
    </svg>
  );
};

IconRandom24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconRandom24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconRandom24;
