import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export const ScrollToTop = () => {
	const location = useLocation();
	const navigationType = useNavigationType();

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (ref.current && navigationType === 'PUSH') {
			ref.current.scrollIntoView(true);
		}
	}, [location]);

	return <div ref={ref} />;
};
