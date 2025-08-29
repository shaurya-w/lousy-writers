import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import Academics from './pages/Academics';
import Tech from './pages/Tech'; 
import Sidequests from './pages/Sidequests';
import NotFound from './pages/NotFound';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}/>        {/*default content inside mainlayout*/}
          <Route path="academics" element={<Academics />}/> 
          <Route path="tech" element={<Tech />}/>           
          <Route path="sidequests" element={<Sidequests />}/>
          <Route path="blog/:slug" element={<BlogPost />}/>
          {/* if you dont add the route and only useNavigate, u will navigate to that page but you wont see corres component */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;