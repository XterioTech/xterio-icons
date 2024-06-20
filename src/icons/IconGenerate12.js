import React from 'react';
import PropTypes from 'prop-types';

const IconGenerate12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.575 7.751H1.5v1.5H4a.75.75 0 00.643-.364l.21-.35L3.96 7.11l-.385.641zM5.5 4.543l-.857-1.428A.75.75 0 004 2.75H1.5v1.5h2.075l2.782 4.636A.75.75 0 007 9.25h1.19l-.22.22 1.06 1.06 1.5-1.5a.75.75 0 00-.53-1.28H7.425L6.375 6l1.05-1.75H10a.75.75 0 00.53-1.28l-1.5-1.5-1.06 1.06.22.22H7a.75.75 0 00-.643.364L5.5 4.543z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGenerate12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGenerate12;
