import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconInfo12 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '12'}
      height={size || '12'}
      viewBox="0 0 12 12"
      {...otherProps}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 106 1a5 5 0 000 10zm-.5-7V3h1v1h-1zm1 1.5a.5.5 0 00-.676-.468l-1 .375.351.936.325-.122V8.5a.5.5 0 00.675.468l1-.375-.35-.936-.325.122V5.5z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconInfo12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconInfo12;
