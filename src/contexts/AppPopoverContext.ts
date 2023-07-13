import { createContext, ReactNode, useContext } from 'react';

interface ContextValue {
	header: string;
	content: ReactNode;
}

const defaultValue = {
	header: '',
	content: null,
};

export const AppPopoverContext = createContext<ContextValue>(defaultValue);
export const useAppPopoverContext = () => useContext(AppPopoverContext);
