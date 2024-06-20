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
        d="M20.624 7.55a2.256 2.256 0 00-1.591-1.593c-1.405-.378-7.034-.378-7.034-.378s-5.629 0-7.033.376a2.252 2.252 0 00-1.59 1.593C3 8.954 3 11.888 3 11.888s0 2.932.375 4.337a2.256 2.256 0 001.591 1.593c1.404.377 7.033.377 7.033.377s5.63 0 7.034-.377a2.252 2.252 0 001.59-1.593C21 14.82 21 11.887 21 11.887s0-2.933-.376-4.337zm-10.412 7.03V9.194l4.66 2.672-4.66 2.712z"
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
