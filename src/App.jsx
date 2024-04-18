
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements,RouterProvider,Route} from "react-router-dom";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import EditContact from "./pages/EditContact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} >

      <Route path="" element={<Home />} />
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/edit/:id" element={<EditContact />} />
      
      </Route>
      <Route path="*" element={<NotFound />} />

    </Route>

  )
);

function App() {
  
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
