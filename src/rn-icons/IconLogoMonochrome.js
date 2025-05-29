import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconLogoMonochrome = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.352 17.219a6.933 6.933 0 001.698-4.538c0-.651-.093-1.3-.273-1.925-1.124-3.947-5.451-6.05-9.271-4.506-.652.264-1.235.64-1.8 1.054-.681.507-1.459.657-2.294.507-.645-.116-1.22-.39-1.773-.712a1.36 1.36 0 01-.603-.73 1.8 1.8 0 01-.057-.208c-.012-.05-.023-.099-.038-.147a2.114 2.114 0 00-4.134.433C1.681 7.967 3.19 9.123 4.623 8.6a1.44 1.44 0 011.22.088c.406.21.79.459 1.146.745.88.72 1.311 1.625 1.21 2.776a6.463 6.463 0 00.264 2.411 6.933 6.933 0 0011.889 2.599zm-8.17-6.451a3.494 3.494 0 105.809 3.884 3.494 3.494 0 00-5.809-3.884z"
        fill="#fff"
      />
    </Svg>
  );
};

IconLogoMonochrome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconLogoMonochrome;
