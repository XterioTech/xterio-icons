import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconUser32 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '34'}
      height={size || '32'}
      viewBox="0 0 34 32"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.976 9.8c-1.698 0-3.075 1.343-3.075 3v.406c0 .67.272 1.313.758 1.786l.484.473c.605.59.944 1.39.944 2.224 0 1.8-1.082 3.433-2.765 4.171l-2.248.988a5.306 5.306 0 00-1.573 1.06l-.725.706-1.45-1.414.725-.707a7.358 7.358 0 012.182-1.47l2.248-.986a2.573 2.573 0 001.556-2.348c0-.304-.123-.595-.343-.81l-.485-.473a4.47 4.47 0 01-1.358-3.2V12.8c0-2.761 2.294-5 5.125-5 2.83 0 5.125 2.239 5.125 5v.406a4.47 4.47 0 01-1.359 3.2l-.484.473c-.22.215-.344.506-.344.81 0 1.013.61 1.932 1.556 2.348l2.249.987a7.358 7.358 0 012.181 1.469l.725.707-1.45 1.414-.724-.707a5.307 5.307 0 00-1.573-1.06l-2.249-.987c-1.683-.738-2.765-2.371-2.765-4.171 0-.835.34-1.634.944-2.224l.485-.473a2.494 2.494 0 00.758-1.786V12.8c0-1.657-1.377-3-3.075-3z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconUser32.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconUser32;
