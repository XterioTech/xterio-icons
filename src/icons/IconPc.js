import React from 'react';
import PropTypes from 'prop-types';

const IconPc = props => {
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
        d="M4 5v10.957h7.385v1.826H7.077V19h9.846v-1.217h-4.308v-1.827H20V5H4z"
        fill="currentColor"
      />
    </svg>
  );
};

IconPc.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconPc;
