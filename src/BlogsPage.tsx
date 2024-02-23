import React, { useEffect, useRef, useState } from 'react';

import Navigation from './components/navigation/Navigation';
import { fetchAllBlogs } from './utils/fetchAllBlogPosts';

import './BlogPage.scss';
import MaxLengthEllipsis from './utils/MaxLengthEllipsis';
import { Link } from 'react-router-dom';

const BlogPage = () => {
  const [allBlogData, setAllBlogData] = useState<any>([]);
  const [errorFetch, setErrorFetch] = useState<any>([]);
  useEffect(() => {
    fetchAllBlogs(setAllBlogData, setErrorFetch);
  }, []);

  const sortedData = allBlogData?.sort(
    (a: { created_at: string }, b: { created_at: string }) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  return (
    <>
      <Navigation />
      <main className="main-container">
        {sortedData &&
          sortedData?.map((blog, i: number) => (
            <div className="single-blog-post-thumbnail" key={i}>
              <div>{<img src={blog?.coverURL || ''} />}</div>
              <div>
                <Link to={`/blog/${blog?.id}`}>
                  <h2>{blog?.title || ''}</h2>
                </Link>
                {/* <div className="highlighter"></div> */}
                <MaxLengthEllipsis text={blog?.content} />
              </div>
            </div>
          ))}
      </main>
    </>
  );
};
export default BlogPage;
