import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconEdit24 = props => {
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
        d="M12.232 5.369l3.464 2-4.086 7.077-2.732.732-.732-2.732 4.086-7.077zM7.464 17.627l5.464-1.464 5.5-9.526-6.928-4L6 12.163l1.464 5.464zM5 21h14v-2H5v2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconEdit24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconEdit24;
