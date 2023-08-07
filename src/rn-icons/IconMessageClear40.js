import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconMessageClear40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 16h-5v6h2v7h12l2-2v-5h2v-6h-5v-5h-8v5zm11 4H13v-2h5v-5h4v5h5v2zm-12 7v-5h10v4.172l-.828.828H22v-4l-2 1v3h-5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconMessageClear40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMessageClear40;
