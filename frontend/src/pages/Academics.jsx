import React from 'react'
import Blogcard from '../components/Blogcard'
import { useState, useEffect} from 'react'
import axios from 'axios';

  const Academics = () => {
  
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [posts, setPosts] = useState([]);
  
  useEffect(()=>{
    try{
      axios.get(`${BASE_URL}/api/posts/academics`)
      .then((res)=>{setPosts(res.data)
        console.log(posts)})
      .catch((err)=>console.log(err))
    }catch(err){
      console.log(err)
    }
  }, [])

  return (
    <div className="pt-[15vh] pl-8 pr-8 md:pl-12 md:pr-12 bg-bgd z-[-10] h-screen">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-12 mt-3">
        {/* Key is a unique value that is passed for lists */}
        {posts.map((post) => (
          <Blogcard key={post._id} blog={post} />
        ))}
      </div>
    </div>
  );
};

export default Academics