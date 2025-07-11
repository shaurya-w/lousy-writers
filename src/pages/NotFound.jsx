import { useNavigate } from "react-router-dom";

function NotFound(){
    const navigate = useNavigate(); 
    return(
        <>
            <div className="fixed inset-0 bg-black/10  backdrop-blur-sm z-30 transition-opacity duration-300"></div>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="flex flex-col items-center space-y-4 w-fit px-8 py-6 bg-gray-300 rounded shadow-lg z-50 border-black">
                    <p className="text-lg font-semibold">ERROR 404 | Page not found</p>
                    <button className="h-10 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition" onClick={() => navigate('/')}>Go to HomePage</button>
                </div>
            </div>
        </>
    );
}

export default NotFound;