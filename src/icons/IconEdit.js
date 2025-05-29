import React from 'react';
import PropTypes from 'prop-types';

const IconEdit = props => {
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
        d="M6.414 15.89L16.556 5.748l-1.414-1.414L5 14.476v1.414h1.414zm.829 2H3v-4.243L14.435 2.212a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 17.89zM3 19.89h18v2H3v-2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEdit;
