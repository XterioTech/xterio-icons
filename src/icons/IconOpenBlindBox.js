import React from 'react';
import PropTypes from 'prop-types';

const IconOpenBlindBox = props => {
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
        d="M10.654 4.066l-.562-2.063-1.809.494.562 2.062 1.81-.493zM3.75 2.438l2.25 3-1.5 1.125-2.25-3 1.5-1.126zm16.5 0l-2.25 3 1.5 1.125 2.25-3-1.5-1.126zm-5.972-.415l-.563 2.25 1.82.454.562-2.25-1.819-.454zM4.5 12.75H15v6.75H4.5v-6.75zM15 21.375H2.625v-9.904L.358 6.937h12.218l3.455 3.456 3.456-3.456h4.21l-1.575 3.938h.003v10.5H15zm1.875-1.875h3.375v-6.75h-3.375v6.75zm-4.313-3.188H9.376v-1.875h3.188v1.876zM4.33 10.688l-.937-1.874h8.407l1.875 1.874H4.33zm16.599-1.874l-.75 1.874h-1.79l1.875-1.874h.665z"
        fill="currentColor"
      />
    </svg>
  );
};

IconOpenBlindBox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconOpenBlindBox;
