import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './App.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import './index.css'
import Contact from './components/Contact.jsx';
import Error from './components/Error.jsx';
import ResturantMenu from './components/ResturantMenu.jsx';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      
      {
        path: "",
        element: <Body />, 
        

      },
      {
        path: "about", // removed leading slash
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "contact", // removed leading slash
        element: <Contact />,
      },
      {
        path:"restaurant/:resId",
        element:<ResturantMenu/>,

      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
