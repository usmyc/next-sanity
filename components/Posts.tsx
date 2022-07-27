import { Post } from "../typings";

interface Props {
  posts: [Post];
}

function Posts({ posts }: Props) {
  return (
    <div className="w-72 bg-white rounded-lg shadow-md p-6 border border-cyan-100">
      {posts.map((post) => (
        <div key={post._id}>
          <span className="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">
            {post.description}
          </span>
          <div className="flex items-center justify-between">
            <a
              className="text-xs text-gray-400 mr-1 hover:text-gray-800"
              href="#"
            >
              Privacy Policy
            </a>
            <div className="w-1/2">
              <button
                type="button"
                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                See more
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
