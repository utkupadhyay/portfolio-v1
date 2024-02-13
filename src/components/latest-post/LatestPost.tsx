import React, { useEffect, useState } from 'react';
import { Link, Route, Router, Routes, useNavigate } from 'react-router-dom';

import './LatestPost.scss';
import { cacheImage } from '../../utils/CacheImage';

interface DataProps {
  coverURL: string;
  altTxt: string;
  blogURL: string;
  postedOn: string;
  updatedOn: string;
  author: string;
  content: string;
  title: string;
  id: string;
}

const LatestPost = ({ data }: any) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<Boolean>(true);
  const postData = data.length > 1 ? data.slice(0, 2) : data;
  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);
  const handleImageClick = async (id: string) => {
    const post = data.find((p: DataProps) => p.id === id);
    if (post && post.coverURL) {
      await cacheImage(post.coverURL, 'cache-first');
      navigate(`/blog/${id}`);
    }
  };

  const latestPostImageContainer = postData?.map(
    (post: DataProps, i: number) => {
      return post?.coverURL !== '' ? (
        <picture key={i} onClick={() => handleImageClick(post.id)}>
          <img
            src={post.coverURL}
            className="post-img-size"
            alt={post.altTxt}
          />
        </picture>
      ) : (
        <div className="post-img-container" key={i}></div>
      );
    }
  );

  return (
    <div className="blog-article-meta">
      {isLoading ? (
        <div className="post-img-container"></div>
      ) : (
        latestPostImageContainer
      )}
    </div>
  );
};

export default LatestPost;
