import { FC, MouseEvent, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Fade, Flex, Grid, Text } from '@chakra-ui/react';


import { AppPopover, LikeButton, ProfileAvatar } from '../components';
import { INewsLikes } from '../interfaces';

export const CommunityLikesButtonAndAmountContainer: FC<Props> = ({ result, newsId }) => {
	const people = useMemo(() => {
		return result.people.flatMap((el) => el.list);
	}, [result]);

	const navigate = useNavigate();
	const goToProfile = (id: string) => (event: MouseEvent<HTMLDivElement>) => {
		event.stopPropagation();
		navigate(`/gamification/profile/${id}`);
	};

	const likeText = useMemo(() => {
		const remainder = result.likesAmount % 10;

		if (remainder === 1) return 'лайк';
		if (remainder >= 2 && remainder <= 4) return 'лайка';

		return 'лайков';
	}, [result]);

	return (
		<Fade in>
			<Flex gap="24px" alignItems="center">
					<LikeButton isLiked={result.isLiked} />
				<AppPopover
					header={`Всего ${result.likesAmount} ${likeText}`}
					content={people.map((item, itemIndex) => (
						<Grid p="12px 16px" key={item.employeeNumber} gap="12px" gridTemplateColumns="auto 1fr">
							<ProfileAvatar profile={item} size="md" onClick={goToProfile(item.employeeNumber)} />
							<Box
								position="relative"
								_before={{
									content: !(itemIndex === people.length - 1) && "''",
									position: 'absolute',
									bottom: '-11px',
									width: '100%',
									height: '1px',
									backgroundColor: 'rgba(255, 255, 255, 0.2)',
								}}
							>
								<Text>
									{item.firstName} {item.lastName}
								</Text>
								<Text>{item.terDivisionName}</Text>
							</Box>
						</Grid>
					))}
				>
					<Text color="rgba(255, 255, 255, 0.8)" size="body14/24" variant="medium">
						Всего {result.likesAmount} {likeText}
					</Text>
				</AppPopover>
			</Flex>
		</Fade>
	);
};

interface Props {
	result: INewsLikes;
	newsId: string;
}
