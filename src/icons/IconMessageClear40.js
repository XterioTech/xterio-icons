import React from 'react';
import PropTypes from 'prop-types';

const IconMessageClear40 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 16h-5v6h2v7h12l2-2v-5h2v-6h-5v-5h-8v5zm11 4H13v-2h5v-5h4v5h5v2zm-12 7v-5h10v4.172l-.828.828H22v-4l-2 1v3h-5z"
        />
      </svg>
    </svg>
  );
};

IconMessageClear40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconMessageClear40.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconMessageClear40;
