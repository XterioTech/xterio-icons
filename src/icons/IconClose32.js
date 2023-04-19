import React from 'react';
import PropTypes from 'prop-types';

const IconClose32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
      style={{ color }}
      width={size || '32'}
      height={size || '32'}
      viewBox="0 0 32 32"
    >
      <svg>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.5 17.621l-8.44 8.44-2.12-2.122 8.439-8.44-7.44-7.438 2.122-2.122 7.44 7.44 7.438-7.44 2.122 2.122-7.44 7.439 8.44 8.44-2.122 2.12-8.439-8.439z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconClose32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconClose32;
