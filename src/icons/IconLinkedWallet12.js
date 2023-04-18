import React from 'react';
import PropTypes from 'prop-types';

const IconLinkedWallet12 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_222_774)" fillRule="evenodd" clipRule="evenodd">
          <path d="M9.81 8.25H3.75V6h1.5v.75h3.94l.56-.56V2.25H5.81l-.56.56V3h-.19l-.03.03L5 3H3.75v-.81L5.19.75h6.06v6.06L9.81 8.25z" />
          <path d="M2.19 3.75h6.06V6h-1.5v-.75H2.81l-.56.56v3.94h3.94l.56-.56V9h.19l.03-.03L7 9h1.25v.81l-1.44 1.44H.75V5.19l1.44-1.44z" />
        </g>
        <defs>
          <clipPath id="clip0_222_774">
            <rect width="12" height="12" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};

IconLinkedWallet12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconLinkedWallet12.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconLinkedWallet12;
