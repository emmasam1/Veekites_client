import React, { useState } from "react";
import { Pagination, Button } from "antd";
import { Link } from "react-router";

const PAGE_SIZE = 4;

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Move posts definition up here
  const posts = [
    {
      id: 1,
      title: "Industry Ministry to Hike",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/1.jpg",
    },
    {
      id: 2,
      title: "Worker Safety: India Appeals",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/2.jpg",
    },
    {
      id: 3,
      title: "Industry Ministry to Hike",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/2.jpg",
    },
    {
      id: 4,
      title: "Worker Safety: India Appeals",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/1.jpg",
    },
    {
      id: 5,
      title: "Industry Ministry to Hike",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/1.jpg",
    },
    {
      id: 6,
      title: "Industry Ministry to Hike",
      date: "August 4, 2019",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe minus, illo error ratione eos ex...",
      image: "https://castro.jamstacktemplates.dev/assets/img/blog/2.jpg",
    },
  ];

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {paginatedPosts.map((post) => (
          <div key={post.id} className="shadow-md bg-white">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-gray-500 text-sm font-medium">{post.date}</p>
              <h2 className="text-xl font-bold mt-2">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.description}</p>
              <Button
                type="primary"
                className="!bg-[#FB2C36] !rounded-none mt-3"
              >
                <Link
                  to={`/blog-details/${post.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${post.id}`}
                  state={{
                    id: post.id,
                    title: post.title,
                    description: post.description,
                    image: post.image,
                  }}
                >
                  Read More
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination
          current={currentPage}
          pageSize={PAGE_SIZE}
          total={posts.length}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Blogs;
