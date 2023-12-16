import React from "react";
import ReactDOM from 'react-dom/client';
import './App.css';
import Layout from "./Shop/Layout";
import Home from "./Shop/Home";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Products from "./Shop/Products";
import Addproducts from "./Shop/Addproducts";
import Addcatagory from "./Shop/Addcatagory";
import Login from "./Shop/Login";
import Register from "./Shop/Register";


export default function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="Products" element={<Products />} />
                  <Route path="Addproducts" element={<Addproducts />} />
                  <Route path="Addcatagory" element={<Addcatagory />} />
                  <Route path="Login" element={<Login />} />
                  <Route path="Register" element={<Register />} />
                  
              </Route>
          </Routes>
      </BrowserRouter>
  )
}