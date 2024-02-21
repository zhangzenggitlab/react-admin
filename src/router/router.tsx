import { useRoutes } from "react-router-dom";
import React from "react";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Register from "@/pages/register";
import NotFound from "@/pages/common/NotFound";

const myrouters: any = [
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  }
];

const addRouter = (menus: any) => {
  myrouters[2].children.push(menus);
};

const GetRoutes = () => {
  const routes = useRoutes(myrouters);
  return routes;
};


export { GetRoutes, addRouter };
