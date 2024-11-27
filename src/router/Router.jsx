import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import AddCoffe from "../pages/AddCoffe";
import UpdateCoffe from "../pages/UpdateCoffe";
import Home from "../pages/Home";

const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:5000/coffee')

            },
            {
                path:"/addcoffe",
                element:<AddCoffe></AddCoffe>
            },
            {
                path:"/updatecoffe/:id",
                element:<UpdateCoffe></UpdateCoffe>,
                loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)
                
            }
        ]
        
    }

])
export default router