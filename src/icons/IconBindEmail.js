import React from 'react';
import PropTypes from 'prop-types';

const IconBindEmail = props => {
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
        d="M3.75 6.375h16.5v5.25h1.875V4.5H1.875v15h8.25v-1.875H3.75V6.375zm12 14.438a3.563 3.563 0 010-7.125h1.125l-.75 1.874h-.375a1.687 1.687 0 100 3.376h1.125v1.875H15.75zm4.125-7.125a3.563 3.563 0 010 7.124H18.75l.75-1.875h.375a1.687 1.687 0 100-3.375H18.75v-1.874h1.125zm-3.75 4.5H19.5v-1.875h-3.375v1.875zm-8.972-9.66l-.806 1.693L12 12.913l5.653-2.692-.806-1.692L12 10.837 7.153 8.529z"
        fill="currentColor"
      />
    </svg>
  );
};

IconBindEmail.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBindEmail;
