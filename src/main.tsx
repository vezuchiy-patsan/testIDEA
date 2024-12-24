import { StrictMode } from 'react';

import { MantineProvider } from '@mantine/core';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from '@/app/app';
import { GlobalErrorBoundary } from '@/widgets/global-error-boundary';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MantineProvider>
			<BrowserRouter>
				<GlobalErrorBoundary>
						<App />
				</GlobalErrorBoundary>
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>,
);
