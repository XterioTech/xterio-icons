import React from 'react';
import PropTypes from 'prop-types';

const IconNodata = props => {
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
        d="M12.248 1.28l9 5.143.252.143v10.867l-.252.143-9 5.144-.248.141-.248-.141-9-5.144-.252-.143V6.566l.252-.143 9-5.144.248-.141.248.141zM4.786 7.892v8.213L12 20.227l7.214-4.122V7.893L12 3.77 4.786 7.893zm12.357.264L12 11.063 6.857 8.157 12 5.25l5.143 2.907z"
        fill="currentColor"
      />
    </svg>
  );
};

IconNodata.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNodata;
