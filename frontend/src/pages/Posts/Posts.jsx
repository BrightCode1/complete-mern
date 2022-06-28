import React from "react";
import PostCard from "../../components/Post/PostCard";
import { PostsContainer } from "./postStyles";
import { posts } from "../../dummydata";

const Posts = () => {
  return (
    <PostsContainer>
      {posts.map((post) => {
        return <PostCard key={post._id} post={post} />;
      })}
    </PostsContainer>
  );
};

export default Posts;
