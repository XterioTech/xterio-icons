import React from 'react';
import PropTypes from 'prop-types';

const IconGenerate24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.434 16H3v2h5a1 1 0 00.857-.485l.99-1.65-.047.035-1.281-1.708L7.434 16zM11 10.056l-2.143-3.57A1 1 0 008 6H3v2h4.434l5.708 9.515A1 1 0 0014 18h3.586l-1.293 1.293 1.414 1.414 3-3A1 1 0 0020 16h-5.434l-2.4-4 2.4-4H20a1 1 0 00.707-1.707l-3-3-1.414 1.414L17.586 6H14a1 1 0 00-.857.486L11 10.056z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGenerate24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGenerate24;
