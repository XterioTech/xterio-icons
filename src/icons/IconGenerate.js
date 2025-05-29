import React from 'react';
import PropTypes from 'prop-types';

const IconGenerate = props => {
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
        d="M8 5a1 1 0 01.857.485l3.042 5.07 1.244-2.07A1 1 0 0114 8h3.586l-1.293-1.293 1.414-1.414 3 3A1 1 0 0120 10h-5.434l-1.5 2.5 1.5 2.5H20a1 1 0 01.707 1.707l-3 3-1.414-1.414L17.586 17H14a1 1 0 01-.857-.485l-1.244-2.072-3.042 5.072A1 1 0 018 20H3v-2h4.434l3.3-5.5-3.3-5.5H3V5h5z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGenerate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGenerate;
