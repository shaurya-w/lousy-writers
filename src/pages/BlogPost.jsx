import React from 'react' 
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'

import { blogs as academicsBlogs } from '../data/academics'
import { blogs as sidequestsBlogs } from '../data/sidequests'
import { blogs as techBlogs } from '../data/tech'

const BlogPost = () => {
  const { slug } = useParams();

  const allBlogs = [
    ...academicsBlogs,
    ...sidequestsBlogs,
    ...techBlogs
  ];

  const blog = allBlogs.find(b => b.slug === slug);

  if (!blog) return <NotFound />;

  return (
    <div className="bg-bgd text-black dark:text-white/80 inset-0">
      <div className="flex w-[80vw] lg:w-[75vw] mx-auto pt-[12.5vh] pb-[100px]">
        <div className="mt-7">
          <h1 className="text-left font-bold text-[25px]">{blog.title}</h1>
          <hr className="mt-[10px]" />
          <div>
            <p className="whitespace-pre-line text-[16px] text-justify mb-10">
              {blog.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost
