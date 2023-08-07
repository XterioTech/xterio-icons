import React from 'react';
import PropTypes from 'prop-types';

const IconSafepaScalable = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.468 4.031a1.928 1.928 0 011.363-.564h9.435L16.22 7.51H8.397a.888.888 0 00-.887.89v6.59l-3.722-3.723a1.098 1.098 0 010-1.557l5.68-5.68zm5.863 12.191H7.51l-4.045 4.044H12.9c.51 0 1.001-.203 1.363-.564l5.679-5.68a1.098 1.098 0 000-1.557l-3.722-3.722v6.589a.89.89 0 01-.89.89z"
          fill="#4A21EF"
        />
      </svg>
    </svg>
  );
};

IconSafepaScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSafepaScalable;
