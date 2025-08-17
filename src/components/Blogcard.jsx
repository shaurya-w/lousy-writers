import { useNavigate } from 'react-router-dom';

function Blogcard({ blog }) {
  const navigate = useNavigate();

  const newPost = () => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <div className="flex flex-col justify-evenly space-y-2.5 bg-ogyellow h-[180px] w-full rounded-2xl shadow-lg p-8 text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-wrap whitespace-normal font-bold">
        <h1 className="text-lg tracking-wide">{blog.title}</h1>
      </div>
      <div>
        <h2 className="font-extralight text-sm italic tracking-wide">{blog.subtitle}</h2> 
      </div>
      <div className="flex justify-between mt-auto items-center">
        <div className="flex space-x-1.5 items-center"> 
          <svg className="fill-gray-400/70 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>
          <p className="font-extralight text-xs tracking-tight text-gray-700">{blog.date}</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-amber-300 hover:bg-amber-300/60 cursor-pointer transition" onClick={newPost}>Read</button>
      </div>
    </div> 
  );
}

export default Blogcard;