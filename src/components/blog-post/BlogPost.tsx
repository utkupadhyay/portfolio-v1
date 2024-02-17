import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './BlogPost.scss';
import '../../App.scss';
import Navigation from '../navigation/Navigation';
import { timeConversion } from '../../utils/DayJs';
import supabase from '../../database/supabaseClient';

const BlogPost = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState<any>(null);

  useEffect(() => {
    if (state?.post?.id) {
      setBlogPost(state.post);
    } else {
      const fetchBlogPost = async () => {
        let { data: blogposts, error } = await supabase
          .from('blogposts')
          .select(`id, title, content, coverURL, created_at , authorName`)
          .eq('id', id)
          .single();

        if (blogposts) {
          setBlogPost(blogposts);
        }
      };

      fetchBlogPost();
    }
  }, [id, state]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  const { title, coverURL, altText, authorName, created_at, content } =
    blogPost;

  return (
    <>
      <Navigation />
      <section className="blog-post-main-container">
        <h2>{title}</h2>
        <picture>
          <img src={coverURL} alt={altText} />
        </picture>
        <section className="about-author-date-time">
          <p>{authorName}</p>
          <p>{timeConversion(created_at)}</p>
        </section>
        <section className="content">
          {/* <DecompressedText compressedText={compressedText} /> */}
          {content}
        </section>
      </section>
    </>
  );
};

export default BlogPost;
