import React from 'react'
import Blogcard from '../components/Blogcard'
import { blogs } from '../data/academics';

  const Tech = () => {
  return (
    <div className="pt-[12.5vh] pl-8 pr-8 md:pl-12 md:pr-12">
      <h1 className="italic font-bold underline text-center p-2">Tech</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-12 mt-3">
        {blogs.map((blog) => (
          <Blogcard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Tech