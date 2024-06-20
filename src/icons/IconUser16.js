import React from 'react';
import PropTypes from 'prop-types';

const IconUser16 = props => {
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5a2.833 2.833 0 00-2.833 2.833v.34c0 .646.256 1.266.714 1.723l.393.394c.43.429.67 1.01.67 1.617a3.48 3.48 0 01-2.051 3.173l-2.688 1.21-.41-.913 2.688-1.21a2.48 2.48 0 001.461-2.26c0-.341-.135-.669-.377-.91l-.393-.394a3.438 3.438 0 01-1.007-2.43v-.34a3.833 3.833 0 017.666 0v.34c0 .91-.362 1.785-1.007 2.43l-.393.394a1.288 1.288 0 00-.377.91c0 .976.572 1.86 1.461 2.26l2.688 1.21-.41.912-2.688-1.21a3.48 3.48 0 01-2.051-3.172c0-.607.24-1.188.67-1.617l.393-.394a2.438 2.438 0 00.714-1.724v-.339A2.833 2.833 0 008 2.5z"
        fill="currentColor"
      />
    </svg>
  );
};

IconUser16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUser16;
