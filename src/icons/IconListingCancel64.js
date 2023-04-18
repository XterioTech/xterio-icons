import React from 'react';
import PropTypes from 'prop-types';

const IconListingCancel64 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      {...otherProps}
      width="64"
      height="64"
      viewBox="0 0 64 64"
    >
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M40.64 27.18l-2.185-2.666-1.856 2.905-.552.864a4.802 4.802 0 01-8.094 0l-.552-.864-1.856-2.905-2.184 2.666-1.307 1.594A4.713 4.713 0 0118.41 30.5c-3.29 0-5.569-3.287-4.413-6.368l4.207-11.22h27.594l4.208 11.22c1.155 3.081-1.123 6.368-4.413 6.368a4.713 4.713 0 01-3.646-1.726L40.64 27.18z"
          stroke="#FEFEFE"
          strokeWidth="5"
        />
        <path
          d="M16.47 30.176v16.941h16.236"
          stroke="#FEFEFE"
          strokeWidth="5"
        />
        <path d="M52 43l-7 7-7-7" stroke="#FEFEFE" strokeWidth="5" />
        <path d="M44.816 47.634V36" stroke="#FEFEFE" strokeWidth="5" />
        <path d="M12.235 47.118h21.177" stroke="#FEFEFE" strokeWidth="5" />
      </svg>
    </svg>
  );
};

IconListingCancel64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IconListingCancel64.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IconListingCancel64;
