import React from 'react';
import PropTypes from 'prop-types';

const IconMetamask = props => {
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
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.563 4.245l-6.555 4.868 1.212-2.872 5.343-1.996z"
          fill="#E2761B"
          stroke="#E2761B"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.43 4.245l6.502 4.914L9.78 6.241 4.43 4.245zM17.203 15.53l-1.746 2.675 3.736 1.027 1.073-3.643-3.063-.06zM3.738 15.589l1.068 3.643 3.735-1.027-1.746-2.675-3.057.059z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.33 11.012l-1.041 1.575 3.71.165-.133-3.986-2.536 2.246zM15.665 11.01l-2.57-2.294-.085 4.032 3.703-.164-1.048-1.575zM8.54 18.206l2.227-1.087-1.923-1.503-.303 2.59zM13.226 17.119l2.233 1.087-.31-2.59-1.923 1.503z"
          fill="#E4761B"
          stroke="#E4761B"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.457 18.208l-2.234-1.087.178 1.456-.02.613 2.076-.982zM8.538 18.208l2.076.982-.014-.613.165-1.456-2.227 1.087z"
          fill="#D7C1B3"
          stroke="#D7C1B3"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.65 14.653l-1.859-.546 1.311-.6.547 1.146zM13.343 14.653l.547-1.146 1.317.6-1.864.546z"
          fill="#233447"
          stroke="#233447"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.543 18.205l.316-2.675-2.062.059 1.746 2.616zM15.143 15.53l.316 2.675 1.746-2.616-2.062-.06zM16.71 12.584l-3.702.164.342 1.904.547-1.146 1.318.6 1.495-1.522zM8.794 14.105l1.317-.6.54 1.147.35-1.904-3.71-.164 1.503 1.521z"
          fill="#CD6116"
          stroke="#CD6116"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.289 12.584l1.555 3.03-.053-1.509-1.502-1.521zM15.216 14.105l-.066 1.51 1.561-3.031-1.495 1.521zM10.997 12.748l-.35 1.904.435 2.246.1-2.958-.185-1.192zM13.008 12.748l-.178 1.186.079 2.964.441-2.246-.342-1.904z"
          fill="#E4751F"
          stroke="#E4751F"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.35 14.654l-.44 2.246.316.218 1.923-1.502.066-1.509-1.864.547zM8.791 14.107l.053 1.509 1.924 1.502.316-.218-.435-2.246-1.858-.547z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.385 19.186l.02-.613-.165-.145h-2.483l-.152.145.013.613-2.075-.982.725.593 1.469 1.021h2.523l1.476-1.021.725-.593-2.076.982z"
          fill="#C0AD9E"
          stroke="#C0AD9E"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.225 17.118l-.316-.217h-1.825l-.316.217-.165 1.456.152-.145h2.483l.165.145-.178-1.456z"
          fill="#161616"
          stroke="#161616"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.84 9.43l.56-2.689-.836-2.496-6.338 4.704 2.437 2.062 3.446 1.008.764-.89-.33-.237.528-.48-.409-.317.527-.402-.349-.264zM3.6 6.741l.56 2.688-.356.264.527.402-.402.316.527.481-.329.237.758.89L8.33 11.01l2.438-2.062L4.43 4.245 3.6 6.74z"
          fill="#763D16"
          stroke="#763D16"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.11 12.019l-3.446-1.008 1.047 1.575-1.561 3.03 2.056-.026h3.063l-1.16-3.571zM8.33 11.011l-3.445 1.008-1.147 3.57h3.057l2.05.027-1.556-3.03L8.33 11.01zM13.006 12.75l.218-3.8 1.001-2.709H9.778l.988 2.708.23 3.802.08 1.199.007 2.951h1.825l.013-2.951.085-1.2z"
          fill="#F6851B"
          stroke="#F6851B"
          strokeWidth=".11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </svg>
  );
};

IconMetamask.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default IconMetamask;
