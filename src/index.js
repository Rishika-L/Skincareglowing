import React from "react";
import ReactDOM from "react-dom/client";
import Layouts from "./pages/Layouts";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Feedback from "./pages/Feedback";

import 'bootstrap/dist/css/bootstrap.min.css';


import { BrowserRouter,Route,Routes } from "react-router-dom";
export default function App()
{
  return(
   <BrowserRouter>
    <Routes>
      <Route path="" element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path="collection" element={<Collection />} />
        <Route path="shop" element={<Shop/>} />
        <Route path="*" element={<NoPage />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)