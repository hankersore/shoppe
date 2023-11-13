import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css'
import Home from "./components/pages/Home";
import OurStory from "./components/pages/OurStory";
import Blog from "./components/pages/Blog";
import NotFound from "./components/pages/NotFound";
import Detail from "./components/detail/Detail";




function App() {
  return (
 <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/about' element={<OurStory/>}/>
<Route path='*' element={<NotFound/>}/>
<Route path='/product/:productId' element={<Detail/>}/>
 </Routes>
  )
}

export default App
