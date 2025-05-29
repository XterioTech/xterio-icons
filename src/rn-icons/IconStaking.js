import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconStaking = props => {
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
        d="M12 18.499a1.678 1.678 0 110 3.355 1.678 1.678 0 010-3.355zM8.822 5.189a7.334 7.334 0 000 13.221v2.871C4.858 19.953 2 16.212 2 11.801c0-4.412 2.858-8.155 6.822-9.483V5.19zm6.592-2.79A10.005 10.005 0 0122 11.8c0 4.323-2.745 8.005-6.586 9.4V18.29a7.331 7.331 0 000-12.98V2.399zm.826 9.402L12 16.042l-4.241-4.241L12 7.56l4.24 4.24zM12 2a1.678 1.678 0 110 3.356A1.678 1.678 0 0112 2z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconStaking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconStaking;
