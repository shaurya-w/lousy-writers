import { useNavigate } from 'react-router-dom';

function Blogcard({ blog }) {
  const navigate = useNavigate();

  const newPost = () => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <div className="flex flex-col justify-evenly space-y-2.5 bg-ogyellow h-[180px] w-full rounded-2xl shadow-lg p-6 text-black transition-transform duration-300 hover:scale-105 hover:shadow-lg" data-aos="flip-right">
      <div className="flex flex-wrap whitespace-normal font-bold">
        <h1 className="text-lg tracking-wide">{blog.title}</h1>
      </div>
      <div className='flex space-x-2'>
        <svg className="fill-gray-800 h-[20px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 280C96 213.7 149.7 160 216 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L216 224C185.1 224 160 249.1 160 280L160 288L224 288C259.3 288 288 316.7 288 352L288 416C288 451.3 259.3 480 224 480L160 480C124.7 480 96 451.3 96 416L96 280zM352 280C352 213.7 405.7 160 472 160L480 160C497.7 160 512 174.3 512 192C512 209.7 497.7 224 480 224L472 224C441.1 224 416 249.1 416 280L416 288L480 288C515.3 288 544 316.7 544 352L544 416C544 451.3 515.3 480 480 480L416 480C380.7 480 352 451.3 352 416L352 280z"/></svg> 
        <h2 className="font-light text-sm italic tracking-wide pr-4">{blog.subtitle}</h2>

      </div>
      <div className="flex justify-between mt-auto items-center">
        <div className="flex space-x-1.5 items-center"> 
          <svg className="fill-gray-400/70 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 32l0 32L48 64C21.5 64 0 85.5 0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192L0 192 0 464c0 26.5 21.5 48 48 48l352 0c26.5 0 48-21.5 48-48l0-272z"/></svg>
          <p className="font-extralight text-xs tracking-tight text-gray-700">{blog.date}</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-amber-300 hover:bg-amber-300/60 cursor-pointer transition hover:border-amber-300 hover:border-2" onClick={newPost}>Read</button>
      </div>
    </div> 
  );
}

export default Blogcard;