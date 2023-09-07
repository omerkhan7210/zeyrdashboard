import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LeftMainSidebar } from "./Components/LeftMainSidebar";
import { Home } from "./Components/DashboardHome/Home";
import { Header } from "./Components/Header/Header";
import { UsersProfile } from "./Components/Users/UsersProfile";
import { UsersList } from "./Components/Users/UsersList";
import {MainCategory} from './Components/Categories/MainCategory' 
import { SubCategory } from "./Components/Categories/SubCategory";
import {ProductAdd} from './Components/Product/ProductAdd'
import { ProductList } from "./Components/Product/ProductList"; 
import {NewOrder} from './Components/Orders/NewOrder' 
import { OrderDetails } from "./Components/Orders/OrderDetails"; 
import { OrderHistory } from "./Components/Orders/OrderHistory"; 
import { Invoice } from "./Components/Orders/Invoice";

function App() {
  return (
    <>
      <LeftMainSidebar />
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user-list" element={<UsersList />} />
          <Route path="/user-profile" element={<UsersProfile />} />
          {/* CATEGORY PAGES */}
          <Route path="/main-category" element={<MainCategory />} />
          <Route path="/sub-category" element={<SubCategory />} />

          {/* PRODUCT PAGES */}
          <Route path="/product-add" element={<ProductAdd />} />
          <Route path="/product-list" element={<ProductList />} />

          {/* ORDER PAGES */}
          <Route path="/new-order" element={<NewOrder />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/order-detail" element={<OrderDetails />} />
          <Route path="/invoice" element={<Invoice />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
