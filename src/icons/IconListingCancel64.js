import React from 'react';
import PropTypes from 'prop-types';

const IconListingCancel64 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '64'}
      height={size || '64'}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.258 10h31.088l4.765 12.707c1.873 4.993-1.818 10.32-7.15 10.32a7.637 7.637 0 01-6.585-3.768l-.118.189a7.613 7.613 0 01-12.911 0l-.119-.19a7.637 7.637 0 01-6.257 3.761v11.598H33.412v5H12.235v-5h1.736V31.436c-2.512-1.953-3.72-5.414-2.478-8.727L16.258 10zm3.465 5l-3.548 9.463a2.637 2.637 0 004.747 2.255l.338-.58 3.82-6.55 4.507 7.21a2.613 2.613 0 004.43 0l.488-.78 4.019-6.43 3.82 6.55.339.58a2.637 2.637 0 004.747-2.255L43.88 15H19.723zm20.045 26.232l2.549 2.55V36h5v8.148l2.915-2.916 3.536 3.536L45 53.535l-8.768-8.767 3.536-3.536z"
        fill="currentColor"
      />
    </svg>
  );
};

IconListingCancel64.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconListingCancel64;
