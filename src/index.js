import "./style.css";
import ReactDOM from "react-dom";
import App from "./components/App";


import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Home from "./components/Home";
  
  import Bookingform from "./components/Bookingform";
  
  
import Carlist from "./components/Carlist";


  var projectroute=createBrowserRouter(
    [
        {
            path:"",
            element:<App></App>,
            children:[
                {
                    path:"home",
                    element:<Home></Home>,

                },
                {
                    path:"carlist",
                    element:<Carlist></Carlist>,

                },
                
                {
                    path:"Bookingform",
                    element:<Bookingform></Bookingform>

                },
                
            ]
        }
    ]
  );

  
  const ans = ReactDOM.createRoot(
    document.getElementById('root'));

     ans.render(<RouterProvider router={projectroute}>
         </RouterProvider>)
    
  


   