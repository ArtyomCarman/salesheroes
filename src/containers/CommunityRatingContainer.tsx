import {FC, useMemo} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Fade, Flex, Text } from '@chakra-ui/react';

import { CommunityNewsRatingProfile, Empty } from '../components';
import { DivisionLevel } from '../interfaces';
import { ReactComponent as ChevronRight } from '../assets/icons/chevron-right.svg';
import newsLeadersBg from '../assets/images/news-leaders.png';
import newsEmptyRating from '../assets/images/newsEmptyRating.png';
import { newsRatingCountry, newsRatingGOSB, newsRatingTERB } from "../models";

interface Props {
	divisionLevel: DivisionLevel;
}

export const CommunityRatingContainer: FC<Props> = ({ divisionLevel }) => {
	const navigate = useNavigate();

	const rating = useMemo(() => {
		if (divisionLevel === DivisionLevel.Тербанк) {
			return newsRatingTERB
		}
		if (divisionLevel === DivisionLevel.Подразделение) {
			return newsRatingGOSB
		}
		return newsRatingCountry
	}, [divisionLevel])

	const goToLeadersList = () => {
		if (rating.leaders.length !== 0) {
			navigate(
				`/rating?divisionLevel=${divisionLevel}
			`,
			);
		}
	};

	return (
		<Fade in>
			<Flex
				bgImage={rating.leaders.length !== 0 ? newsLeadersBg : newsEmptyRating}
				bgRepeat="no-repeat"
				bgPosition="center"
				bgSize="cover"
				backgroundColor="rgba(87, 92, 112, 0.3)"
				p="24px"
				borderRadius="16px"
				justifyContent="center"
				onClick={goToLeadersList}
				_hover={{
					cursor: rating.leaders.length !== 0 ? 'pointer' : 'auto',
					backgroundColor: 'rgba(87, 92, 112, 0.5)',
				}}
				_active={{
					backgroundColor: 'rgba(87, 92, 112, 0.5)',
				}}
				position="relative"
			>
				{rating.leaders.length !== 0 ? (
					<Flex flexDirection="column" gap="16px">
						<Flex justifyContent="center" gap="8px" alignItems="flex-end">
							{rating.leaders.map((leader) => (
								<CommunityNewsRatingProfile
									key={leader.employeeNumber}
									leader={leader}
									total={rating.leaders.length}
								/>
							))}
						</Flex>
						<Flex flexDirection="column" gap="8px" alignItems="center">
							<Text size="sub20/28" variant="medium" textAlign="center">
								{rating.heading}
							</Text>
							<Flex
								flexDirection="row"
								gap="8px"
								alignItems="center"
								_hover={{
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '4px',
									paddingX: '4px',
								}}
								_active={{
									backgroundColor: 'rgba(255, 255, 255, 0.1)',
									borderRadius: '4px',
									paddingX: '4px',
								}}
							>
								<Text color="rgba(255, 255, 255, 0.8)" size="body14/24" textAlign="center">
									{rating.usersPosition}
								</Text>
								<ChevronRight width="16px" height="16px" />
							</Flex>
						</Flex>
					</Flex>
				) : (
					<Empty icon="avatar">
							<Text
								size="sub18/24"
								color="rgba(255, 255, 255, 0.6)"
								textAlign="center"
								whiteSpace="pre-wrap"
							>
								{divisionLevel === DivisionLevel.Тербанк
									? 'Пока нет участников рейтинга в вашем тербанке.'
									: 'Пока нет участников рейтинга в вашем подразделении.'}
								{'\n'}Получите{' '}
								<Box
									as="span"
									color="rgba(255, 255, 255, 0.8)"
									fontWeight="600"
									_hover={{
										backgroundColor: 'rgba(255, 255, 255, 0.1)',
										borderRadius: '4px',
										borderBottom: 'none',
									}}
									_active={{
										backgroundColor: 'rgba(255, 255, 255, 0.1)',
										borderRadius: '4px',
										borderBottom: 'none',
									}}
									borderBottom="1px dashed rgba(255, 255, 255, 0.8)"
								>
									<Link to="/awards">награды</Link>
								</Box>{' '}
								и станьте первым!
							</Text>
						) : (
							<Text
								size="sub18/24"
								color="rgba(255, 255, 255, 0.6)"
								textAlign="center"
								whiteSpace="pre-wrap"
							>
								{divisionLevel === DivisionLevel.Тербанк
									? 'Как только участники из выбранного тербанка получат свои первые награды, они появятся в рейтинге.'
									: 'Как только участники из выбранного подразделения получат свои первые награды, они появятся в рейтинге.'}
							</Text>
					</Empty>
				)}
			</Flex>
		</Fade>
	);
};
