import React from 'react';
import PropTypes from 'prop-types';

const IconMinus16 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7h12l-1 2H2V7z" />
      </svg>
    </svg>
  );
};

IconMinus16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconMinus16.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconMinus16;
