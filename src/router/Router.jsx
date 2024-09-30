import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Seabg from "../pages/Seabg";
import Digital from "../pages/Digital";
import Pop from "../pages/Pop";
import Classic from "../pages/Classic";
import Abstract from "../pages/Abstract";
const Router = createBrowserRouter([  
    {
      path: "/",
      element: <App />,
      
    },
    {
        path: "/sea",
        element: <Seabg />,
        
      },
      {
        path: "/digitalart",
        element: <Digital />,
        
      },
      {
        path: "/pop",
        element: <Pop></Pop>,
        
      },
      {
        path: "/Classic",
        element: <Classic />,
        
      },
      {
        path: "/Abstract",
        element: <Abstract/>,
        
      },
    
    
  ]);
  
  export default Router;  