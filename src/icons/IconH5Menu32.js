import React from 'react';
import PropTypes from 'prop-types';

const IconH5Menu32 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="32"
      height="32"
      viewBox="0 0 32 32"
    >
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 7H4v2h24V7z" />
        <path d="M28 15H4v2h24v-2z" />
        <path d="M28 23H4v2h24v-2z" />
      </svg>
    </svg>
  );
};

IconH5Menu32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconH5Menu32.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconH5Menu32;
