import React from 'react';
import './LatestPost.scss';
interface DataProps {
  imgURL: string;
  altTxt: string;
  blogURL: string;
  postedOn: string;
  updatedOn: string;
  author: string;
  content: string;
  title: string;
}
const LatestPost = ({ data }: any) => {
  const postData = data.slice(0, 2);
  console.log({ postData });
  const latestPostImageContainer = postData?.map(
    (post: DataProps, i: number) => {
      return post?.imgURL !== '' ? (
        <picture>
          <img src={post.imgURL} />
        </picture>
      ) : (
        <div className="post-img-container" key={i}></div>
      );
    }
  );

  return <div className="blog-article-meta">{latestPostImageContainer}</div>;
};
export default LatestPost;
