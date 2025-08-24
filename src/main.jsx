import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from './App.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import './index.css'
import Contact from './components/Contact.jsx';

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
        path: "about",
        element: <About />,
      },
      {
        path:"contact",
        element:<Contact />,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
