import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx';

import HomePage from '../Pages/HomePage/HomePage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App /> ,
        errorElement: <h1>404 Not Found</h1>,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <h1>About</h1> },
        ],
    }
]);

export default router;