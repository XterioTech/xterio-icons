import React from 'react';
import PropTypes from 'prop-types';

const originFill = 'normal';

const IconOpenBlindBox64 = props => {
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
          d="M28.412 10.842l-1.5-5.5-4.824 1.315 1.5 5.5 4.824-1.315zM10 6.5l6 8-4 3-6-8 4-3zm44 0l-6 8 4 3 6-8-4-3zM38.075 5.394l-1.5 6 4.85 1.212 1.5-6-4.85-1.212zM12 34h28v18H12V34zm28 23H7V30.59L.955 18.5h32.58l9.215 9.214 9.214-9.214h11.228l-4.2 10.5H59v28H40zm5-5h9V34h-9v18zm-11.5-8.5H25v-5h8.5v5zm-21.955-15l-2.5-5h22.42l5 5h-24.92zm44.262-5l-2 5h-4.772l5-5h1.772z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconOpenBlindBox64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOpenBlindBox64;
