import React from "react";
import Home from "./pages/HomePage";
import UserList from "./pages/UsersListPage";

export default [
  {
    path: "/",
    component: Home.component,
    exact: true,
  },
  {
    path: "/users",
    component: UserList.component,
    loadData: UserList.loadData,
  },
];
