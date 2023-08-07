import React from 'react';
import PropTypes from 'prop-types';
import { Svg, Path } from 'react-native-svg';

const IconFiatcurrency40 = props => {
  const { color, size, ...otherProps } = props;

  return (
    <Svg
      color={color}
      width={size || '40'}
      height={size || '40'}
      viewBox="0 0 40 40"
      {...otherProps}
    >
      <Path
        d="M7.968 25.044l7.27 4.853 6.405-2.902.016-1.117-6.52 3.052-6.554-4.136-.617.25zM28.28 13.07c.1.067.2.134.317.217-.2.083-.417.183-.617.284-.2.083-.4.183-.617.266-.1-.066-.217-.15-.317-.216-.35.1-.667.133-.934.1-.267-.017-.5-.1-.7-.25-.334-.234-.65-.467-.984-.7.183-.084.383-.184.567-.268.183-.083.383-.183.567-.267.333.234.667.467 1.017.717.1.067.233.067.4 0 .15-.066.184-.133.084-.216-.184-.117-.367-.25-.534-.367-.117-.083-.284-.134-.5-.15a4.666 4.666 0 00-.634-.034c-.3-.016-.7-.016-1.2-.033-.485-.017-.835-.117-1.018-.25-.15-.117-.3-.217-.45-.334-.2-.15-.3-.3-.3-.45 0-.15.116-.317.333-.483-.083-.067-.184-.134-.267-.2.184-.084.35-.184.534-.284.183-.1.367-.184.534-.284.1.067.183.134.283.2.284-.1.55-.133.784-.116.233.016.45.083.65.217l.75.5c-.2.1-.383.183-.583.283-.183.1-.384.184-.567.284-.267-.184-.517-.35-.784-.534-.083-.05-.183-.05-.3 0-.134.067-.117.167.033.267.1.067.2.117.3.184.15.1.467.166.968.183.5.017.917.017 1.234.033.317.017.55.034.683.05.267.034.5.117.684.234l.6.4c.25.167.384.333.367.517.017.15-.116.333-.383.5zm-10.223 4.787c.117.083.217.15.334.233-.217.1-.45.2-.667.3-.217.1-.434.2-.65.284-.118-.084-.218-.15-.334-.234-.384.1-.717.134-1 .117-.284-.034-.534-.117-.735-.267l-1.05-.75c.2-.1.4-.184.6-.284.2-.1.4-.2.617-.283.35.25.717.5 1.084.75.117.083.25.083.417 0 .167-.067.2-.15.083-.233-.183-.134-.383-.267-.567-.4-.116-.084-.3-.134-.533-.167a9.455 9.455 0 00-.667-.05c-.317-.017-.75-.017-1.268-.034-.517-.016-.884-.116-1.084-.267-.167-.116-.317-.233-.483-.35-.217-.15-.317-.317-.317-.484.017-.166.133-.333.367-.516l-.3-.2c.183-.1.383-.2.566-.3.184-.1.384-.2.584-.3l.3.2c.3-.1.584-.134.834-.117.25.016.484.1.7.233.267.183.534.35.801.534-.2.1-.417.2-.617.3l-.6.3c-.284-.184-.55-.384-.834-.567-.083-.067-.2-.067-.317 0-.15.067-.133.167.033.283.1.067.217.117.317.184.167.117.5.183 1.034.2.534.017.967.017 1.318.033.35.017.583.034.733.05.284.034.534.117.718.25.216.134.416.284.633.418.267.183.4.366.4.55-.033.217-.183.4-.45.584zm8.739 6.787l5.07-2.301-1.201-.701-3.853 1.818-.016 1.184zm-5.087-3.402l-.016 1.084-6.454 2.935-7.271-4.853.567-.25 6.587 4.152 6.587-3.068zm5.17-1.268l.017-1.15 3.802-1.785 1.167.667-4.986 2.268zm.083-4.636l4.903-2.234-7.487-4.336-4.97 2.134 7.554 4.436zM17.69 9.902l6.42-2.752.368-.15.35.2L34 12.52l-.067 3.018-1.467.684 1.534.884-.067 3.018-1.517.7 1.567.918-.066 3.019-18.778 8.788-9.006-5.67L6 24.16l.95-.4-.817-.517L6 19.524l.917-.4-.784-.5L6 14.904l7.054-3.034-.083-.067 4.636-1.985.083.084zm-3.068 3.052l-6.654 2.851 7.27 4.853 6.505-2.952-7.121-4.752z"
        fill="currentColor"
      />
    </Svg>
  );
};

IconFiatcurrency40.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconFiatcurrency40;
