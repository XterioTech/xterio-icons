import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconQuiz16 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '16'}
      height={size || '16'}
      viewBox="0 0 16 16"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1H2v14h5v-2H4V3h9v3h2V1zm.07 9.414L13.656 9l-4.525 4.525-.425 1.839 1.839-.424 4.525-4.526zM12 7H5V5h7v2zm-7 4h3V9H5v2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconQuiz16.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconQuiz16;
