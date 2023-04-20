import React from 'react';
import PropTypes from 'prop-types';

const IconOtherFill24 = props => {
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
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM8.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.5-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconOtherFill24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOtherFill24;
