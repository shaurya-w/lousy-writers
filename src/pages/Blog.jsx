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
    <div className='bg-bgd text-black dark:text-white/70 inset-0'>
    <div className="flex w-[80vw] lg-[75vw] mx-auto pt-[12.5vh]">
        <div className="mt-7">
            <h1 className="text-left font-bold text-[25px]">{blog.title}</h1>
            <hr className="mt-[10px]" />
            <div><p className='whitespace-pre-line text-[16px] text-justify'>{blog.content}</p></div>
            <div className="mt-7 flex justify-start space-x-[50px]">
                <svg className="fill-gray-500 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2l144 0c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48l-97.5 0c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3l0-38.3 0-48 0-24.9c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192l64 0c17.7 0 32 14.3 32 32l0 224c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32L0 224c0-17.7 14.3-32 32-32z"/></svg>
                <svg className="fill-gray-500 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default BlogPost