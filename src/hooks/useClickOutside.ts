import { RefObject, useEffect } from 'react';

export const useClickOutside = (props: Props) => {
	const { enabled, ref, handler } = props;
	useEffect(() => {
		if (!enabled) return;

		const listener = (event: Event) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			handler(event);
		};

		document.addEventListener('click', listener, true);

		return () => {
			document.removeEventListener('click', listener, true);
		};
	}, [enabled, ref, handler]);
};

interface Props {
	enabled?: boolean;
	ref: RefObject<HTMLElement>;
	handler: (e: Event) => void;
}
