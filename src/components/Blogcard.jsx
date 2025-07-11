import { useNavigate } from 'react-router-dom';

function Blogcard({ blog }) {
  const navigate = useNavigate();

  const newPost = () => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <div className="flex flex-col justify-evenly space-y-2.5 bg-yellow-200 h-[180px] w-full rounded-2xl shadow-lg p-4 text-black">
      <div className="flex flex-wrap whitespace-normal font-bold">
        <h2 className="text-lg tracking-wide">{blog.title}</h2>
      </div>
      <div>
        <p className="font-extralight text-sm tracking-tight">{blog.subtitle}</p> 
      </div>
      <div className="flex justify-between mt-auto items-center">
        <div className="flex space-x-1.5 items-center"> 
          <svg className="fill-gray-400/70 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>
          <p className="font-extralight text-xs tracking-tight text-gray-700">{blog.date}</p>
        </div>
        <button className="rounded-lg bg-amber-500/40 h-8 w-15" onClick={newPost}>Read</button>
      </div>
    </div> 
  );
}

export default Blogcard;