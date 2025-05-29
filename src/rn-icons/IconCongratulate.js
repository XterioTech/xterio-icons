import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconCongratulate = props => {
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
        d="M14.756 9.05c1.517 1.517 2.76 3.067 3.537 4.362.385.641.684 1.267.827 1.824.125.487.22 1.28-.348 1.848-.337.337-.754.437-1.139.44L2.025 21.78 6.282 6.172c.002-.384.103-.801.44-1.138.568-.568 1.361-.473 1.848-.348.557.143 1.183.442 1.824.827 1.295.777 2.845 2.02 4.362 3.537zm-.046 7.307c-1.21-.782-2.604-1.923-3.971-3.29-1.368-1.368-2.51-2.762-3.291-3.972l-2.724 9.987 9.986-2.725zm-1.293-5.968c-1.441-1.44-2.87-2.576-3.997-3.253-.48-.287-.871-.471-1.165-.57.098.294.283.686.57 1.165.677 1.128 1.812 2.556 3.253 3.997 1.44 1.44 2.869 2.575 3.997 3.252.479.288.87.473 1.164.571-.098-.294-.283-.686-.57-1.165-.677-1.128-1.812-2.557-3.252-3.997zm1.616-6.026h-1.894V1.685h1.894v2.678zm7.086 6.302H19.44V8.772h2.678v1.893zM17.432 7.71l-1.339-1.339 4.017-4.017 1.339 1.34-4.017 4.016z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconCongratulate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconCongratulate;
