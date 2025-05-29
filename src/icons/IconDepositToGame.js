import React from 'react';
import PropTypes from 'prop-types';

const IconDepositToGame = props => {
  const { color, size, ...otherProps } = props;

  return (
    <svg
      style={{ color }}
      width={size || '24'}
      height={size || '24'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M18.744 7.463A5.455 5.455 0 0122 12.455v3.636a5.455 5.455 0 01-5.454 5.455H7.454A5.455 5.455 0 012 16.09v-3.636a5.455 5.455 0 013.255-4.992L6.86 8.867a3.638 3.638 0 00-3.039 3.406l-.004.182v3.636a3.638 3.638 0 003.455 3.633l.181.003h9.092a3.637 3.637 0 003.632-3.454l.004-.182v-3.636a3.637 3.637 0 00-3.044-3.588l1.606-1.404zm-8.562 4.31v1.591H12v1.819h-1.82L10.183 17H8.363v-1.817H6.545v-1.819h1.817v-1.818h1.559l.26.227zM17.454 17h-1.817v-1.817h1.817V17zm-1.817-3.636h-1.819v-1.591l.26-.227h1.559v1.818zm-2.78-4.64l2.671-2.597.19-.186.191.186.826.803.201.196-.2.195-4.546 4.42-.19.185-.19-.186-4.546-4.419-.202-.195.202-.196.827-.803.19-.186.19.186 2.672 2.597V2.182h1.713v6.542zm-1.442.645l.001.001V2.454h-.001V9.37z"
        fill="currentColor"
      />
    </svg>
  );
};

IconDepositToGame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconDepositToGame;
