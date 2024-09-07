import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

import HomePage from '../Pages/HomePage/HomePage.jsx';
import NotFound from '../NotFound.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> ,
        errorElement: <NotFound />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <h1>About</h1> },
        ],
    }
]);

export default router;