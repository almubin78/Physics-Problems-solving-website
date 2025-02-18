import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import SimpleCalculate from "../SimpleCalculate/SimpleCalculate";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        children:[
            {
                path:'/simple-calculate',
                element:<SimpleCalculate/>,
            }
        ]
    }
])

