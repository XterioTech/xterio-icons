import React from 'react';
import PropTypes from 'prop-types';
import { Svg, G, Path, Defs, ClipPath } from 'react-native-svg';

const IconAssetTabPlatform24 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      {...otherProps}
    >
      <G clipPath="url(#clip0_222_822)" fill="currentColor">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zm2 0c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM7.404 8.003a1.309 1.309 0 10.405 2.516s.338-.136.748.104l.05.03c.455.263 1.426.827 1.363 2.004a4.296 4.296 0 101.595-2.94v-.004c-.995.737-1.993.212-2.456-.032l-.03-.015c-.42-.221-.482-.588-.482-.588a1.31 1.31 0 00-1.193-1.075zm6.046 7.111a2.165 2.165 0 111.558-4.038 2.165 2.165 0 01-1.558 4.038z"
        />
        <Path d="M7.809 10.519l.049.01.02-.093-.088.036.019.047zm0 0l-.05-.01-.02.092.089-.035-.019-.047zm2.161 2.138l.05.005v-.002l-.05-.003zm1.595-2.94h-.05v.105l.082-.066-.032-.039zm0-.004h.05v-.1l-.08.06.03.04zm-2.967-.635l.049-.008-.016-.093-.068.065.035.036zm0 0l-.05.01.017.09.067-.063-.034-.037zM12 21.05A9.05 9.05 0 0021.05 12h-.1A8.95 8.95 0 0112 20.95v.1zM2.95 12A9.05 9.05 0 0012 21.05v-.1A8.95 8.95 0 013.05 12h-.1zM12 2.95A9.05 9.05 0 002.95 12h.1A8.95 8.95 0 0112 3.05v-.1zM21.05 12A9.05 9.05 0 0012 2.95v.1A8.95 8.95 0 0120.95 12h.1zM12 23.05c6.103 0 11.05-4.947 11.05-11.05h-.1c0 6.047-4.902 10.95-10.95 10.95v.1zM.95 12c0 6.103 4.948 11.05 11.05 11.05v-.1C5.953 22.95 1.05 18.048 1.05 12h-.1zM12 .95C5.898.95.95 5.897.95 12h.1C1.05 5.953 5.953 1.05 12 1.05v-.1zM23.05 12C23.05 5.897 18.103.95 12 .95v.1c6.048 0 10.95 4.903 10.95 10.95h.1zM6.688 8.214c.216-.123.465-.179.713-.16l.007-.1a1.36 1.36 0 00-.77.173l.05.087zm-.504.53c.112-.223.287-.407.504-.53l-.05-.087a1.36 1.36 0 00-.543.572l.09.045zm-.124.72c-.03-.247.013-.498.124-.72l-.09-.045c-.12.24-.167.51-.133.777l.1-.012zm.297.668a1.26 1.26 0 01-.297-.668l-.1.012c.034.267.145.518.32.721l.077-.065zm.617.39a1.26 1.26 0 01-.617-.39l-.076.066c.176.203.408.35.667.421l.026-.097zm.731-.018c-.236.078-.49.085-.73.018l-.027.097c.259.072.533.065.789-.02l-.032-.095zm.085-.032a1.25 1.25 0 01-.085.032l.032.095c.03-.01.06-.02.09-.033l-.037-.094zm.793.108a1.032 1.032 0 00-.555-.149.865.865 0 00-.22.035l-.012.005-.004.001H7.79l.019.047.019.047.002-.001.01-.003a.765.765 0 01.191-.03.933.933 0 01.502.135l.05-.087zm.05.029l-.05-.029-.05.087.049.029.05-.087zm1.387 2.051c.066-1.211-.935-1.789-1.388-2.051l-.05.087c.459.266 1.4.815 1.338 1.959l.1.005zm-.017.573a4.296 4.296 0 01.017-.57l-.1-.01a4.383 4.383 0 00-.017.583l.1-.003zm4.402 4.084a4.246 4.246 0 01-4.402-4.084l-.1.003a4.346 4.346 0 004.505 4.18l-.003-.1zm4.084-4.402a4.246 4.246 0 01-4.085 4.402l.004.1a4.346 4.346 0 004.18-4.505l-.1.003zm-4.402-4.084a4.246 4.246 0 014.402 4.085l.1-.004a4.346 4.346 0 00-4.505-4.18l.004.1zm-2.49.925a4.226 4.226 0 012.49-.925l-.003-.1a4.327 4.327 0 00-2.55.947l.063.078zm-.082-.043v.004h.1v-.003h-.1zm-2.429.013c.46.242 1.487.785 2.51.028l-.06-.08c-.968.715-1.938.208-2.403-.037l-.047.089zm-.03-.016l.03.016.047-.089-.03-.016-.047.09zm-.458-.632c-.05.008-.05.01-.05.01a.186.186 0 00.004.018.867.867 0 00.085.208c.072.126.2.28.42.396l.046-.089a.916.916 0 01-.379-.357.767.767 0 01-.077-.192V9.07l-.05.008zm-.336-.592c.149.173.247.38.286.601l.099-.017a1.362 1.362 0 00-.31-.65l-.075.066zM7.4 8.054c.333.024.642.18.86.432l.076-.065a1.36 1.36 0 00-.929-.467l-.007.1zm4.762 4.244a2.215 2.215 0 001.269 2.863l.036-.093a2.115 2.115 0 01-1.211-2.734l-.094-.036zm2.864-1.27a2.215 2.215 0 00-2.864 1.27l.094.036a2.115 2.115 0 012.734-1.212l.036-.093zm1.269 2.864a2.215 2.215 0 00-1.27-2.863l-.035.093a2.115 2.115 0 011.211 2.734l.094.036zm-2.864 1.27a2.215 2.215 0 002.864-1.27l-.094-.036a2.115 2.115 0 01-2.734 1.212l-.036.093z" />
      </G>
      <Defs>
        <ClipPath id="clip0_222_822">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

IconAssetTabPlatform24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconAssetTabPlatform24;