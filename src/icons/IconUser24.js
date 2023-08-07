import React from 'react';
import PropTypes from 'prop-types';

const IconUser24 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6a3 3 0 00-3 3v.263c0 .65.263 1.274.73 1.728l.477.464c.592.576.926 1.366.926 2.192a4.428 4.428 0 01-2.653 4.057l-2.257.987a5.15 5.15 0 00-1.526 1.026l-.717.697-1.394-1.434.717-.697a7.153 7.153 0 012.118-1.424l2.257-.988a2.428 2.428 0 001.455-2.224c0-.286-.115-.559-.32-.758l-.477-.464A4.41 4.41 0 017 9.263V9a5 5 0 0110 0v.263a4.41 4.41 0 01-1.336 3.162l-.477.464c-.205.199-.32.472-.32.758 0 .964.57 1.838 1.455 2.224l2.257.988a7.153 7.153 0 012.118 1.424l.717.697-1.394 1.434-.717-.697a5.15 5.15 0 00-1.526-1.026l-2.257-.987a4.428 4.428 0 01-2.653-4.057c0-.826.334-1.616.926-2.192l.477-.464A2.41 2.41 0 0015 9.263V9a3 3 0 00-3-3z"
        fill="currentColor"
      />
    </svg>
  );
};

IconUser24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUser24;
