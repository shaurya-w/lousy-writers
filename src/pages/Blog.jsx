import React from 'react'           
import { blogs } from '../data/academics'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'

const BlogPost = () => {                              //no need to pass props!

  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);

  if (!blog) return <NotFound />;

  return (
    <>
    <div className='bg-bgd text-black dark:text-white/80 inset-0'>
    <div className="flex w-[80vw] lg-[75vw] mx-auto pt-[12.5vh] pb-[100px]">
        <div className="mt-7">
            <h1 className="text-left font-bold text-[25px]">{blog.title}</h1>
            <hr className="mt-[10px]" />
            <div><p className='whitespace-pre-line text-[16px] text-justify mb-10'>{blog.content}</p></div>
            {/*<div className="mt-10 flex justify-end mb-9">
                <svg className="fill-gray-500 h-5 hover:scale-130 transition-transform duration-200 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
            </div>*/}
        </div>
    </div>
    </div>
    </>
  )
}

export default BlogPost