import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { cacheImage } from '../../utils/CacheImage';

import './PostThumbnail.scss';
import { timeConversion } from '../../utils/DayJs';

export interface DataProps {
  altText: string;
  authorName: string;
  content: string;
  coverURL: string;
  created_at: string;
  id: string;
  title: string;
}

const PostThumbnail = ({ data, error }: any) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(true);
  const sortedData = data.sort(
    (a: { created_at: string }, b: { created_at: string }) =>
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  const postData = sortedData.length > 1 ? sortedData.slice(0, 2) : data;
  useEffect(() => {
    if (data.length > 0) {
      Promise.all(
        postData.map((post: DataProps) =>
          cacheImage(post.coverURL, 'cache-first')
        )
      ).then(() => setLoading(false));
    }
  }, [data]);

  const handleImageClick = (id: string) => {
    const post = data.find((p: DataProps) => p.id === id);
    if (post && post.coverURL) {
      navigate(`/blog/${id}`, { state: { post: post } });
    }
  };

  const latestPostImageContainer = postData?.map(
    (post: DataProps, i: number) => {
      return (
        post?.coverURL !== '' && (
          <article
            className="post-thumbnail-wrapper"
            key={i}
            onClick={() => handleImageClick(post.id)}>
            <picture>
              <img
                src={post.coverURL}
                // className="post-img-size"
                alt={post.altText}
              />
            </picture>
            <div className='post-thumbnail-details'>
              <p>{post.title}</p>
              <p>{timeConversion(post.created_at)}</p>
            </div>
          </article>
        )
      );
    }
  );

  return <div className="post-thumbnail-container">
    {!loading && latestPostImageContainer}
    {error && <p>{error && error.message}</p>}
  </div>;
};

export default PostThumbnail;
