import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "./App";
import Error from "./Error";


const router = createBrowserRouter([{
    path :"/", 
    element : <App/>,
    errorElement : <Error/>,
    children : [
        {
            path :"/", 
        }
    ]
}]) 

export default router; 