import React from 'react';
import PropTypes from 'prop-types';

const IconSettings24 = props => {
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
        d="M1.126 11.514a1 1 0 000 .972l5 9A1 1 0 007 22h10a1 1 0 00.874-.514l5-9a1 1 0 000-.972l-5-9A1 1 0 0017 2H7a1 1 0 00-.874.514l-5 9zm19.73.486l-4.444 8H7.588l-4.444-8 4.444-8h8.824l4.444 8zM10 12a2 2 0 114 0 2 2 0 01-4 0zm2-4a4 4 0 100 8 4 4 0 000-8z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSettings24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSettings24;
