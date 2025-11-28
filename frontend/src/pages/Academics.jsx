import React, { useState, useEffect } from 'react';
import Blogcard from '../components/Blogcard';
import axios from 'axios';

const Academics = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [academicPosts, setAcademicPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/posts/academics`);
        console.log("API RESPONSE:", res.data);

        if (Array.isArray(res.data)) {
          setAcademicPosts(res.data);
        } else {
          console.error("API returned non-array:", res.data);
          setAcademicPosts([]);
        }
      } catch (err) {
        console.error("API ERROR:", err);
        setAcademicPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pt-[15vh] pl-8 pr-8 md:pl-12 md:pr-12 bg-bgd h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-12 mt-3">
        {academicPosts.map((post) => (
          <Blogcard key={post._id} blog={post} />
        ))}
      </div>
    </div>
  );
};

export default Academics;