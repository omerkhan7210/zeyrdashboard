import React from 'react'
import { NewCustomers } from "./NewCustomers";
import { RecentOrders } from "./RecentOrders";
import { SalesReport } from "./SalesReport";

export const Home = () => {
  return (
    <div className="ec-page-wrapper">
      <div className="ec-content-wrapper">
        <div className="content">
          <SalesReport />
          <RecentOrders />
          <NewCustomers />
        </div>
      </div>
    </div>
  );
}
