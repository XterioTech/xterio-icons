import React from 'react';
import PropTypes from 'prop-types';

const IconTakephoto = props => {
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
        d="M20.713 8.128l-.246.566a.506.506 0 01-.934 0l-.246-.566a4.363 4.363 0 00-2.22-2.25l-.759-.339a.53.53 0 010-.963l.717-.319a4.366 4.366 0 002.251-2.326l.253-.611a.506.506 0 01.942 0l.253.61a4.366 4.366 0 002.25 2.327l.718.32a.53.53 0 010 .962l-.76.338a4.363 4.363 0 00-2.219 2.251zM9 3h5v2H9.828l-2 2H4v12h16v-8h2v9a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1h4l2-2zm3 15a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm0-2a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
        fill="currentColor"
      />
    </svg>
  );
};

IconTakephoto.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconTakephoto;
