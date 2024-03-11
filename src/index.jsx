import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './components/about/About';
import BlogPost from './components/blog-post/BlogPost';
import BlogPage from './BlogsPage';
import CreateBlogPost from './components/create-blogpost/CreateBlogPost';
import './index.css';

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
    element: <BlogPost />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/create-post',
    element: <CreateBlogPost />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);