import React from 'react';
import PropTypes from 'prop-types';

const IconCopy24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.25 5H7.086L4.25 7.836V16h2V8.664L7.914 7h7.336V5zm1.5 12.5h-6.5v-6.172l.328-.328h6.172v6.5zm-8.5-7L9.75 9h9v10.5H8.25v-9z"
        />
      </svg>
    </svg>
  );
};

IconCopy24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconCopy24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconCopy24;
