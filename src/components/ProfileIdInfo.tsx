import { FC, useMemo } from 'react';
import { Flex, Text, usePrefersReducedMotion } from '@chakra-ui/react';

import { InfoBlock } from './InfoBlock';
import { EmployeeStatus, IProfileBody, IProfileProgressBody } from '../interfaces';
import { gradient } from '../utils';
import { LevelProgressIcon } from './LevelProgressIcon';
import { ProfileAvatar } from './ProfileAvatar';

interface Props {
	profile: IProfileBody;
	progress?: IProfileProgressBody;
}

export const ProfileIdInfo: FC<Props> = ({ profile, progress }) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const animation = prefersReducedMotion ? undefined : `${gradient} 8s ease infinite`;

	const settings = useMemo(() => {
		if (profile.employeeStatus === EmployeeStatus.Top_Manager) {
			return {
				background:
					'linear-gradient(135deg, #FFBF3E 0%, #FF7317 50.87%, #F83B4A 58.16%, #875AC0 100%)',
				text: `${profile?.tbShortName}
			${profile.positionName ? ` • ${profile.positionName}` : null}`,
			};
		}
		if (profile.employeeStatus === EmployeeStatus.Contestant) {
			return {
				background: `radial-gradient(66.32% 66.32% at 50% 10%, var(--${profile?.colorCode?.primary}) 30.03%, var(--${profile?.colorCode?.secondary}) 100%)`,
				text: profile?.tbShortName,
			};
		}

		return { background: 'none', text: profile?.tbShortName };
	}, [profile]);

	return (
		<>
			{profile.employeeStatus !== EmployeeStatus.Contestant ? (
				<InfoBlock text="Раньше вы участвовали в турнирах и получали награды за лучшие результаты. В профиле сохранены ваши достижения" />
			) : null}
			<Flex
				borderRadius="16px"
				bgColor="rgba(87, 92, 112, 0.3)"
				p="32px"
				direction="column"
				alignItems="center"
				gap="16px"
				overflow="hidden"
				_before={{
					content: "''",
					position: 'absolute',
					width: '550px',
					height: '550px',
					top: '-308px',
					filter: 'blur(76px) opacity(0.6)',
					background: settings.background,
					borderRadius: '50%',
					animation: `${animation}`,
				}}
				position="relative"
			>
				<ProfileAvatar profile={profile} size="xl" />
				<Flex gap="8px" direction="column" zIndex="1" textAlign="center">
					<Text size="h24/32" variant="semibold">
						{profile.firstName} {profile.lastName}
					</Text>
					<Text color="rgba(255, 255, 255, 0.8)">{settings.text}</Text>
				</Flex>
				{progress && profile.employeeStatus === EmployeeStatus.Contestant ? (
					<Flex
						alignItems="center"
						gap="10px"
						bgColor="rgba(87, 92, 112, 0.3)"
						borderRadius="8px"
						p="8px 14px"
						zIndex="1"
					>
						<LevelProgressIcon
							colorCode={{
								primary: progress?.userLevel.colorCode.primary,
								secondary: progress?.userLevel.colorCode.secondary,
							}}
						/>
						<Text size="body14/24" variant="medium">
							{progress?.userLevel.currentLevelName}
						</Text>
					</Flex>
				) : null}
			</Flex>
		</>
	);
};
