import React from 'react' 
import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import NotFound from './NotFound'
import axios from 'axios'

const BlogPost = () => {
  const { slug } = useParams();
  console.log(slug)
  const [loading, setLoading] = useState(true); 
  const [post, setPost] = useState(null)
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  //const blog = allBlogs.find(b => b.slug === slug);
  useEffect(()=>{
    axios.get(`${BASE_URL}/api/post/${slug}`)
    .then((res)=>{
      setPost(res.data); 
      console.log(res.data)
      setLoading(false); 
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [slug])

  if(loading) return <p>Loading ...</p>
  if (!post) return <NotFound />;

  return (
    <div className="bg-bgd text-black dark:text-white/90 inset-0">
      <div className="flex w-[80vw] lg:w-[75vw] mx-auto pt-[12.5vh] pb-[95px]">
        <div className="mt-7">
          <h1 className="text-left font-bold text-[25px]">{post.title}</h1>
          <hr className="mt-[10px]" />
          <div>
            <p className="whitespace-pre-line text-[16px] text-justify mb-10">
              {post.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPost