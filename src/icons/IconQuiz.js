import React from 'react';
import PropTypes from 'prop-types';

const IconQuiz = props => {
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
        d="M20 2a1 1 0 011 1v3.757l-2 2V4H5v16h14v-2.758l2-2V21a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h16zm1.778 6.808l1.414 1.414L15.414 18l-1.416-.002.002-1.412 7.778-7.778zM13 12v2H8v-2h5zm3-4v2H8V8h8z"
        fill="currentColor"
      />
    </svg>
  );
};

IconQuiz.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconQuiz;
