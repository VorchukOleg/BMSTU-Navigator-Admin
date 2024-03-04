import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './styles/global.scss'
import store from '@/store';
import { RouterProvider } from "react-router";
import { PrimeReactProvider } from 'primereact/api';
import { AppRouter } from './routes/AppRouter.tsx';
import { Provider } from 'react-redux';
import { ToastProvider } from './contexts/ToastProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Provider store={store}>
        <ToastProvider>
            <PrimeReactProvider value={{ ripple: true }}>
                <RouterProvider router={ AppRouter } />
            </PrimeReactProvider>
        </ToastProvider>
    </Provider>
</React.StrictMode>,
)
