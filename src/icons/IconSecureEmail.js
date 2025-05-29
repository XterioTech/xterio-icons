import React from 'react';
import PropTypes from 'prop-types';

const IconSecureEmail = props => {
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
        d="M22.125 14.25v3.177a3 3 0 01-1.456 2.572l-2.294 1.376-2.294-1.376a3 3 0 01-1.456-2.572V14.25l3.75-1.125 3.75 1.125zm0-2.625H20.25v-5.25H3.75v11.25h9.375V19.5H1.875v-15h20.25v7.125zm-5.625 4.02v1.782c0 .395.207.76.546.964l1.329.798 1.33-.798c.338-.204.545-.57.545-.964v-1.781l-1.875-.563-1.875.563zm1.153-5.423L12 12.913l-5.653-2.691.806-1.694L12 10.837l4.847-2.309.806 1.694z"
        fill="currentColor"
      />
    </svg>
  );
};

IconSecureEmail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconSecureEmail;
