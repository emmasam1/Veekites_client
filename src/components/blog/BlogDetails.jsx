// BlogDetails.jsx
import React from "react";
import { useParams, useLocation } from "react-router";

const BlogDetails = () => {
  const { name, id } = useParams();
  const location = useLocation();
  const post = location.state;

  return (
    <div className="w-11/12 mx-auto py-10">
      <img src={post.image} alt={post.title} className="w-full h-72 object-cover rounded-md" />
      <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.description}</p>
      <p className="text-gray-400 mt-2">Blog ID: {id}</p>
    </div>
  );
};

export default BlogDetails;
