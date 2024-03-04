import { createBrowserRouter } from 'react-router-dom';
import { RootPage } from '../pages/RootPage';
import { ErrorPage } from '../pages/ErrorPage';
import { appRoutes } from './routes';
import BaseNodesPage from '@/pages/BaseNodesPage/BaseNodesPage';
import { RoomsPage } from '@/pages/RoomsPage';


export const AppRouter = createBrowserRouter(
    [
        {
            path: appRoutes.root(),
            element: <RootPage />,
            errorElement: <ErrorPage isGlobal />,
            children: [
                {
                    errorElement: <ErrorPage isGlobal />,
                    children: [
                        {
                            path: appRoutes.baseNodes(),
                            element: <BaseNodesPage />,
                        },
                        {
                            path: appRoutes.rooms(),
                            element: <RoomsPage />,
                        }
                    ],
                },
            ],
        },
    ]
);
