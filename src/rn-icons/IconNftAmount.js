import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconNftAmount = props => {
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
        d="M12 3.375l7.563 4.322v8.606L12 20.625l-7.563-4.322V7.697L12 3.375zM21.625 6.5v11L12 23l-9.625-5.5v-11L12 1l9.625 5.5zM12 5.403L7.6 7.89l4.4 2.487 4.4-2.487L12 5.403z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconNftAmount.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconNftAmount;
