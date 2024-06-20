import React from 'react';
import PropTypes from 'prop-types';

const IconGift24 = props => {
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
        d="M16 13l-4-2-4 2V4.75H3.75v3.5H7v1.5H4.75v9.5h14.5v-9.5H17v-1.5h3.25v-3.5H16V13zm0-9.75V2H8v1.25H2.25v6.5h1v11h17.5v-11h1v-6.5H16zm-4 6.073l-2.5 1.25V3.5h5v7.073L12 9.323z"
        fill="currentColor"
      />
    </svg>
  );
};

IconGift24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconGift24;
