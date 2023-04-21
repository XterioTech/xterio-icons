import React from 'react';
import PropTypes from 'prop-types';

const IconYoutubeScalable = props => {
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
        d="M20.049 7.84a2.105 2.105 0 00-1.485-1.487C17.254 6 12 6 12 6s-5.254 0-6.565.35A2.102 2.102 0 003.95 7.839c-.35 1.312-.35 4.05-.35 4.05s0 2.737.35 4.048a2.105 2.105 0 001.485 1.486c1.31.353 6.565.353 6.565.353s5.253 0 6.564-.352a2.102 2.102 0 001.485-1.487c.35-1.311.35-4.049.35-4.049s0-2.737-.35-4.048zm-9.718 6.56V9.375l4.35 2.494-4.35 2.531z"
        fill="currentColor"
      />
    </svg>
  );
};

IconYoutubeScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconYoutubeScalable;
