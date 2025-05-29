import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconBlur = props => {
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
        <G clipPath="url(#clip0_0_713)">
          <Path
            d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
            fill="#080404"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.429 6h1.428v4.136l.509.475h3.062v1.198h-3.901l-.969-1.073-.13-.118V6zm-4.93 1.937v-.812h2.445l.269.298v.616l-.269.257H7.498v-.36zm-1.356 0V6h4.401l.688.745h.004l.065.074.27.293h-.011l.011.013v1.171l-.559.53.56.631v1.161l-.004.003h.003l-1.085 1.19H6.143V7.936zm1.355 2.234v.447h2.446l.269-.262v-.591l-.269-.308H7.498v.714zM6 15.535v-2.831h1.429v4.136l.521.565h1.671l.522-.603v-4.098h1.428V17.405l-.92 1.117H6.947L6 17.405v-1.871zm10.609-.772v-.122h.005v-.473l-.285-.254h-2.472v1.157h2.466l.286-.308zm-4.18-2.059V18.514h1.428v-2.282h2.472l.285.256v2.026H18v-2.282l-.592-.53.592-.63v-1.158l-.017-.016h.008l-1.078-1.194h-4.484z"
            fill="#FF8700"
          />
        </G>
        <Defs>
          <ClipPath id="clip0_0_713">
            <Path fill="#fff" d="M0 0h24v24H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </Svg>
  );
};

IconBlur.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconBlur;
