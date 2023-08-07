import React from 'react';
import PropTypes from 'prop-types';

const IconQuiz24 = props => {
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
        d="M20 3H4v17h6v-2H6V5h12v3.412h2V3zm.485 10.414L19.071 12l-5.657 5.657-.707 2.121 2.122-.707 5.656-5.657zM16 10H8V8h8v2zm-8 5h2v-2H8v2z"
        fill="currentColor"
      />
    </svg>
  );
};

IconQuiz24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconQuiz24;
