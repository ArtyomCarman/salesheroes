import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import { ReactComponent as ArrowThickRight } from '../assets/icons/arrow-thick-right.svg';
import { ReactComponent as ShineIcon } from '../assets/icons/shine.svg';

const styles = {
	link: css({
		position: 'relative',

		display: 'flex',
		alignItems: 'center',
		gap: '4px',
		fontWeight: 'normal',
		fontSize: '12px',
		fontFamily: 'Graphik',
		color: 'white',
		letterSpacing: '0.6px',
		padding: '6px 12px',
		background: 'linear-gradient(92.17deg, #875AC0 0%, #56BEF9 100%)',
		border: '1px solid #2A4286',
		borderRadius: '100px',
		textDecoration: 'none',
		alignSelf: 'center',
		lineHeight: '1.5',
	}),
	shine: css({
		position: 'absolute',
		right: '0',
		top: '-10px',
	}),
};

const GamificationButton = () => (
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	<Link to="/salesheroes" target="_blank" css={styles.link}>
		Герои продаж
		<ArrowThickRight width="16px" height="16px" />
		<ShineIcon width="32px" height="32px" css={styles.shine} />
	</Link>
);

export default GamificationButton;
