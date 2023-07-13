import { FC } from 'react';

import { IColorCode } from '../interfaces';

interface LevelIconProps {
	colorCode: IColorCode;
}

export const LevelIcon: FC<LevelIconProps> = ({ colorCode }) => {
	return (
		<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M2 3C2 1.34315 3.34315 0 5 0H19C20.6569 0 22 1.34315 22 3V18.0351C22 19.2695 21.2438 20.3779 20.0945 20.8283L13.0945 23.5711C12.3909 23.8468 11.6091 23.8468 10.9055 23.5711L3.90552 20.8283C2.75616 20.3779 2 19.2695 2 18.0351V3Z"
				fill={`url(#${colorCode.primary})`}
			/>
			<defs>
				<linearGradient
					id={colorCode.primary}
					x1="-1.84615"
					y1="-5.25"
					x2="23.4706"
					y2="29.1167"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor={`var(--${colorCode.primary})`} />
					<stop offset="0.51666" stopColor={`var(--${colorCode.secondary})`} />
					<stop offset="1" stopColor={`var(--${colorCode.primary})`} />
				</linearGradient>
			</defs>
		</svg>
	);
};
