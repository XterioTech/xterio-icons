import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconHolding = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24.001171112060547'}
      height={size || '24'}
      viewBox="0 0 24.001171112060547 24"
      {...otherProps}
    >
      <Path
        d="M22.453 17.91L12 22.557 1.546 17.911l.719-1.62 9.734 4.328 9.734-4.327.72 1.619zm0-5.608L12 16.95 1.546 12.302l.719-1.618 9.734 4.326 9.734-4.326.72 1.618zm.763-5.855L12 11.494.784 6.447 12 1.4l11.216 5.047zm-18.116 0L12 9.55l6.9-3.104L12 3.34 5.1 6.447z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconHolding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconHolding;
