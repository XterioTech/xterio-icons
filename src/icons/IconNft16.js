import React from 'react';
import PropTypes from 'prop-types';

const IconNft16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <svg>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 4.618l-5-2.5-5 2.5v6.764l5 2.5 5-2.5V4.618zM14 12V4L8 1 2 4v8l6 3 6-3zM4.723 6.416l.554-.832L8 7.399l2.723-1.815.554.832L8.5 8.268V11h-1V8.268L4.723 6.416z"
          fill="currentColor"
        />
      </svg>
    </svg>
  );
};

IconNft16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNft16;
