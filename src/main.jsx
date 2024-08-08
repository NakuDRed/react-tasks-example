import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { TaskContextProvider } from './context/TaskContext.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<TaskContextProvider>
			<App />
		</TaskContextProvider>
	</StrictMode>
);
