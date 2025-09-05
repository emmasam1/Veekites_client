import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Outlet, useLocation } from "react-router";

const { Search } = Input;

const categories = [
  "Renovation",
  "Architecture",
  "Concrete Supply",
  "Laminate Flooring",
  "Consulting",
  "Interior Design",
  "Project Planning",
];

const popularPosts = [
  {
    id: 1,
    title: "What are Groundworkers and what do they do?",
    date: "30 October 2019",
    image:
      "https://castro.jamstacktemplates.dev/assets/img/blog/sidebar-blog-3.jpg",
  },
  {
    id: 2,
    title: "What are Groundworkers and what do they do?",
    date: "30 October 2019",
    image:
      "https://castro.jamstacktemplates.dev/assets/img/blog/sidebar-blog-2.jpg",
  },
  {
    id: 3,
    title: "What are Groundworkers and what do they do?",
    date: "30 October 2019",
    image:
      "https://castro.jamstacktemplates.dev/assets/img/blog/sidebar-blog-3.jpg",
  },
];

const Blog = () => {
  const location = useLocation();

  // Check if we are exactly on "/blog"
  const isBlogHome = location.pathname === "/blog";

  return (
    <div>
      {/* ✅ Show hero only on /blog */}
      {isBlogHome && (
        <div className=" h-[500px] relative -top-21 bg-[url(/src/assets/blog_hero.jpg)] bg-no-repeat bg-cover bg-center">
          <div className="bg-[url('https://via.placeholder.com/1600x500')] bg-cover bg-center h-[500px] flex justify-center items-center flex-col text-center px-4 relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Insights & Updates from Veekites
              </h2>
              <p className="mt-4 text-lg md:text-xl text-gray-200">
                Explore our latest news, industry trends, and expert opinions
                across construction, oil & gas, ICT, and more.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto w-11/12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="bg-[#F7F8F9] p-5  mb-15 !py-5">
              <h3 className="font-bold text-lg mb-3">Search</h3>
              <Search
                placeholder="Search"
                enterButton={
                  <button className="bg-[#FB2C36] px-4 py-[.6rem] text-white">
                    <SearchOutlined />
                  </button>
                }
                className="pb-10"
              />
            </div>

            {/* Categories */}
            <div className="bg-[#F7F8F9] p-5 mb-15">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="border-b border-gray-200 pb-2 hover:text-blue-600 cursor-pointer"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Posts */}
            <div className="bg-[#F7F8F9] p-5">
              <h3 className="font-bold text-lg mb-5">Popular Post</h3>
              <div className="space-y-5">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex gap-4 items-center">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-16 object-cover"
                    />
                    <div>
                      <h4 className="text-sm font-semibold leading-snug hover:text-blue-600 cursor-pointer">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ This will either show Blogs or BlogDetails */}
          <div className="md:col-span-2 order-1 md:order-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
