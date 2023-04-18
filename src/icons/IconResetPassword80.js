import React from 'react';
import PropTypes from 'prop-types';

const IconResetPassword80 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="80"
      height="80"
      viewBox="0 0 80 80"
    >
      <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40 12.833c-8.008 0-14.5 6.492-14.5 14.5v10.51a18.421 18.421 0 00-4 11.49c0 10.218 8.283 18.5 18.5 18.5s18.5-8.282 18.5-18.5c0-10.217-8.283-18.5-18.5-18.5-3.473 0-6.723.958-9.5 2.623v-6.123a9.5 9.5 0 0119 0v1.048a23.007 23.007 0 015 3.098v-4.146c0-8.008-6.492-14.5-14.5-14.5zm-13.5 36.5c0-7.456 6.044-13.5 13.5-13.5s13.5 6.044 13.5 13.5-6.044 13.5-13.5 13.5-13.5-6.044-13.5-13.5zm7.834 0A5.667 5.667 0 1142.5 54.42v2.67l-5 .91v-3.58a5.667 5.667 0 01-3.166-5.087z"
        />
      </svg>
    </svg>
  );
};

IconResetPassword80.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconResetPassword80.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconResetPassword80;
