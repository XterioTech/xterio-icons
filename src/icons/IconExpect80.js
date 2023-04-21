import React from 'react';
import PropTypes from 'prop-types';

const IconExpect80 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '80'}
      height={size || '80'}
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62 21H18v21.258l-5 3.683V16h54v49H31.466l-4.579-8.058-3.716-6.438-7.467 5.436 5.674 1.52-2.625 9.61-4.823-1.317 1.3-4.763-10.933-2.93L24.72 43.19l6.505 11.267L34.376 60h27.623v-8H43V29h19v-8zm0 13v13H48V34h14zm-3 4h-7v5h6l1-5z"
        fill="currentColor"
      />
    </svg>
  );
};

IconExpect80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconExpect80;
