import './App.css';
import TodoList from './Screens/TodoList';
import { BrowserRouter, Routes, Switch } from "react-router-dom";
import React, { Component } from 'react';
import PrivateRoute from './Routes/PrivateRoutes';
import PublicRoute from './Routes/PublicRoute';
import Login from './Screens/Login';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute restricted={false} component={Login} path="'/login" exact />
        <PrivateRoute path="/todo" component={TodoList} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
