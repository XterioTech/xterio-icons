import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconLandscapeSpan64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53 14H35v36h18V14zm3 15V11H32v42h24V29zM40 44h8v3h-8v-3zM27 29v3H11v18h16v3H8V29h19zm-12.5-3c0-5.617 4.027-10.294 9.352-11.3l-1.275 3.826 2.846.948 2.658-7.974H26c-8.008 0-14.5 6.492-14.5 14.5h3z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconLandscapeSpan64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLandscapeSpan64;
