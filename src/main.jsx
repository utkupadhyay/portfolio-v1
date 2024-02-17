import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './components/about/About';
import BlogPost from './components/blog-post/BlogPost';
import BlogPage from './BlogsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/blog/:id',
    element: <BlogPost postData={null} />,
  },
  {
    path: '/blog',
    element: <BlogPage blogData={null} />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
