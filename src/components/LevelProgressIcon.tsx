import { FC } from 'react';

import { IColorCode } from '../interfaces';

interface LevelProgressIconProps {
	colorCode: IColorCode;
}

export const LevelProgressIcon: FC<LevelProgressIconProps> = ({ colorCode }) => {
	return (
		<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect opacity="0.01" width="32" height="32" fill="#1D2532" />
			<path
				d="M2.6665 3C2.6665 1.34315 4.00965 0 5.6665 0H26.3332C27.99 0 29.3332 1.34315 29.3332 3V24.7289C29.3332 25.9634 28.577 27.0718 27.4277 27.5222L17.0943 31.5711C16.3907 31.8468 15.609 31.8468 14.9053 31.5711L4.57202 27.5222C3.42266 27.0718 2.6665 25.9634 2.6665 24.7289V3Z"
				fill="url(#paint0_linear_1194_35969)"
			/>
			<path
				d="M3.6665 3C3.6665 1.89543 4.56193 1 5.6665 1H26.3332C27.4377 1 28.3332 1.89543 28.3332 3V24.7289C28.3332 25.5519 27.8291 26.2908 27.0628 26.5911L16.7295 30.6401C16.2604 30.8239 15.7393 30.8239 15.2702 30.6401L4.93684 26.5911C4.17061 26.2908 3.6665 25.5519 3.6665 24.7289V3Z"
				stroke="url(#paint1_linear_1194_35969)"
				strokeWidth="2"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_1194_35969"
					x1="-2.4617"
					y1="-7"
					x2="31.294"
					y2="38.8222"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor={`var(--${colorCode.primary})`} />
					<stop offset="0.51666" stopColor={`var(--${colorCode.secondary})`} />
					<stop offset="1" stopColor={`var(--${colorCode.primary})`} />
				</linearGradient>
				<linearGradient
					id="paint1_linear_1194_35969"
					x1="2.6665"
					y1="0"
					x2="29.3332"
					y2="26.6667"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#9096A9" />
					<stop offset="0.46354" stopColor="white" stopOpacity="0.8" />
					<stop offset="1" stopColor="#B3B8CA" />
				</linearGradient>
			</defs>
		</svg>
	);
};
