import React from 'react';
import PropTypes from 'prop-types';

const IconListingCancel = props => {
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
        d="M19.1 17.334l1.31-1.31 1.59 1.59-3.943 3.943-3.943-3.943 1.59-1.59 1.146 1.145V13.67h2.25v3.663zm2.155-9.64c.842 2.244-.818 4.64-3.215 4.64a3.435 3.435 0 01-2.961-1.694l-.054.085a3.425 3.425 0 01-5.806 0l-.053-.085a3.432 3.432 0 01-2.815 1.688v5.218h6.494v2.249H3.323v-2.25h.78v-5.929a3.43 3.43 0 01-1.114-3.923L5.13 1.978h13.98l2.144 5.715zm-16.16.788a1.186 1.186 0 002.134 1.015l.151-.26L9.1 6.29l2.026 3.241a1.176 1.176 0 001.993.001l.218-.35 1.808-2.892 1.718 2.945.152.26a1.186 1.186 0 002.135-1.014l-1.596-4.255H6.69L5.094 8.482z"
        fill="currentColor"
      />
    </svg>
  );
};

IconListingCancel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconListingCancel;
