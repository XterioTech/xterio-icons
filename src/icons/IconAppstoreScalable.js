import React from 'react';
import PropTypes from 'prop-types';

const IconAppstoreScalable = props => {
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
        d="M16.485 12.017c-.008-1.399.625-2.453 1.905-3.23-.716-1.025-1.799-1.59-3.226-1.698-1.351-.107-2.83.787-3.371.787-.573 0-1.881-.75-2.91-.75C6.758 7.159 4.5 8.82 4.5 12.2c0 .998.183 2.03.548 3.092.488 1.399 2.247 4.825 4.083 4.77.96-.022 1.638-.68 2.887-.68 1.212 0 1.84.68 2.91.68 1.852-.027 3.444-3.142 3.907-4.544-2.483-1.171-2.35-3.43-2.35-3.501z"
        fill="currentColor"
      />
      <path
        d="M14.329 5.762c1.04-1.234.945-2.358.914-2.762-.918.053-1.98.625-2.586 1.329-.666.755-1.058 1.688-.974 2.74.993.076 1.9-.435 2.646-1.307z"
        fill="currentColor"
      />
    </svg>
  );
};

IconAppstoreScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconAppstoreScalable;
