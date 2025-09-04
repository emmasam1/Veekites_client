// BlogDetails.jsx
import { HiArrowLongLeft } from "react-icons/hi2";
import React from "react";
import { useParams, useLocation, Link } from "react-router";

const BlogDetails = () => {
  const { name, id } = useParams();
  const location = useLocation();
  const post = location.state;

  return (
    <div className="w-11/12 mx-auto ">
      <Link to="/blog" className="flex items-center gap-2 mb-4 w-24">
        <HiArrowLongLeft size={30}/>
        Return
      </Link>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-72 object-cover rounded-md"
      />
      <h1 className="text-3xl font-bold mt-6">{post.title}</h1>
      <p className="text-gray-600 mt-4">{post.description}</p>
    </div>
  );
};

export default BlogDetails;
