import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconMagicedenScalable = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <Svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipPath="url(#clip0_1_738)">
          <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#0B070A"
          />
          <Path
            d="M15.003 9.853l.843.991c.097.112.183.203.217.255.252.25.394.59.393.943-.023.416-.295.7-.546 1.003l-.59.693-.308.36a.084.084 0 00-.013.091.085.085 0 00.08.048h3.077c.47 0 1.062.395 1.028.995a1.025 1.025 0 01-.307.726c-.196.193-.46.302-.737.303H13.32c-.316 0-1.169.034-1.408-.693a.852.852 0 01-.02-.47c.07-.23.18-.447.325-.64.242-.359.504-.718.763-1.066.333-.456.676-.898 1.013-1.363a.085.085 0 000-.106l-1.224-1.436a.087.087 0 00-.137 0c-.328.436-1.763 2.368-2.07 2.76-.305.39-1.06.412-1.477 0l-1.914-1.895a.088.088 0 00-.096-.018.087.087 0 00-.054.08v3.642c.005.258-.073.512-.222.725a1.255 1.255 0 01-.608.462 1.062 1.062 0 01-.95-.133 1.036 1.036 0 01-.442-.84V8.72c.011-.235.097-.462.246-.647.15-.185.354-.319.585-.383a1.179 1.179 0 011.125.302L9.7 10.896a.086.086 0 00.104.014.086.086 0 00.027-.024l2.091-2.853a1.042 1.042 0 01.795-.375h5.44a1.06 1.06 0 01.785.352 1.027 1.027 0 01.249.815 1.05 1.05 0 01-.366.647 1.079 1.079 0 01-.707.25h-3.046a.086.086 0 00-.074.046.083.083 0 00.005.085z"
            fill="#E42575"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_1_738">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconMagicedenScalable.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMagicedenScalable;
