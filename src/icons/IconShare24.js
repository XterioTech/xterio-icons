import React from 'react';
import PropTypes from 'prop-types';

const IconShare24 = props => {
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
        d="M20.768 5.36a1 1 0 01.146 1.046l-5.334 12a1 1 0 01-1.454.435l-2.667-1.714 1.082-1.682 1.685 1.083 4.036-9.08-12.521 3.018 1.715 2.206a1 1 0 01.185.838l-.282 1.224 5.38-3.967 1.188 1.61-7.556 5.57a1 1 0 01-1.568-1.029l.782-3.394-2.374-3.053a1 1 0 01.555-1.586l16-3.857a1 1 0 011.002.332z"
        fill="currentColor"
      />
    </svg>
  );
};

IconShare24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconShare24;
