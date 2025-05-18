import { QueryClient } from '@tanstack/react-query';
import '@testing-library/jest-dom';

export const queryClientTesting = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

