import { FC, useMemo } from 'react';
import { Box, BoxProps, Image, Spinner, Text } from '@chakra-ui/react';

import { EmployeeStatus, IEmployee, ILeader, IProfileBody } from '../interfaces';

export const ProfileAvatar: FC<Props> = ({ profile, size = 'sm', ...otherProps }) => {
	const defaultColorPrimary = useMemo(() => {
		if (profile.employeeStatus === EmployeeStatus.Top_Manager) {
			return 'var(--gradient)';
		}

		return 'var(--gray-60)';
	}, [profile]);

	const defaultColorSecondary = useMemo(() => {
		if (profile.employeeStatus === EmployeeStatus.Top_Manager) {
			return 'var(--gradient)';
		}

		return 'var(--gray-30)';
	}, [profile]);

	const sizes = useMemo(() => {
		if (size === 'md') {
			return { border: 3, fontSize: 16, logoSide: 48, padding: 5 };
		}
		if (size === 'lg') {
			return { border: 4, fontSize: 16, logoSide: 64, padding: 6 };
		}
		if (size === 'xl') {
			return { border: 6, fontSize: 30, logoSide: 132, padding: 10 };
		}

		return { border: 2, fontSize: 12, logoSide: 32, padding: 4 };
	}, [size]);

	if (!profile) return <Spinner />;

	return (
		<Box
			height={`${sizes.logoSide}px`}
			width={`${sizes.logoSide}px`}
			overflow="hidden"
			p={`${sizes.padding}px`}
			flexShrink={0}
			position="relative"
			zIndex="1"
			_before={{
				content: "''",
				position: 'absolute',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				borderRadius: '50%',
				border: `${sizes.border}px solid transparent`,
				background: `var(--${profile?.colorCode?.secondary}, ${defaultColorSecondary}) border-box`,
				mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
				maskComposite: 'destination-out',
			}}
			{...otherProps}
		>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center"
				height="100%"
				borderRadius="50%"
				position="relative"
				_before={{
					content: "''",
					position: 'absolute',
					width: '100%',
					height: '100%',
					background: `var(--${profile?.colorCode?.primary}, ${defaultColorPrimary})`,
					borderRadius: '50%',
					filter: 'opacity(0.3)',
				}}
			>
				{profile.photoData ? (
					<Image
						src={profile.photoData}
						borderRadius="50%"
						width="100%"
						height="100%"
						zIndex="1"
						objectFit="cover"
					/>
				) : (
					<Text fontSize={`${sizes.fontSize}px`} zIndex={1}>
						{profile.firstName.charAt(0)}
						{profile.lastName.charAt(0)}
					</Text>
				)}
			</Box>
		</Box>
	);
};

export type Size = 'sm' | 'md' | 'lg' | 'xl';

interface Props extends BoxProps {
	profile: IProfileBody | ILeader | IEmployee;
	size?: Size;
}
