import React from 'react'
import { Link } from 'react-router-dom'

export const LeftMainSidebar = () => {
  return (
    
<div className="ec-left-sidebar ec-bg-sidebar">
  <div id="sidebar" className="sidebar ec-sidebar-footer">
    <div className="ec-brand">
      <a href="/">
        <img className="ec-brand-icon" src="/assets/img/logo/ec-site-logo.png" alt="" />
        <span className="ec-brand-name text-truncate">Ekka</span>
      </a>
    </div>
    {/* begin sidebar scrollbar */}
    <div className="ec-navigation" data-simplebar>
      {/* sidebar menu */}
      <ul className="nav sidebar-inner" id="sidebar-menu">
        {/* Dashboard */}
        <li className="active">
          <a className="sidenav-item-link" href="index.html">
            <i className="mdi mdi-view-dashboard-outline" />
            <span className="nav-text">Dashboard</span>
          </a>
          <hr />
        </li>
        {/* Users */}
        <li className="has-sub">
          <a className="sidenav-item-link" href="javascript:void(0)">
            <i className="mdi mdi-account-group" />
            <span className="nav-text">Users</span> <b className="caret" />
          </a>
          <div className="collapse">
            <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
              <li className>
                <a className="sidenav-item-link" href="/user-list">
                  <span className="nav-text">User List</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/user-profile">
                  <span className="nav-text">Users Profile</span>
                </a>
              </li>
            </ul>
          </div>
          <hr />
        </li>
        {/* Category */}
        <li className="has-sub">
          <a className="sidenav-item-link" href="javascript:void(0)">
            <i className="mdi mdi-dns-outline" />
            <span className="nav-text">Categories</span> <b className="caret" />
          </a>
          <div className="collapse">
            <ul className="sub-menu" id="categorys" data-parent="#sidebar-menu">
              <li className>
                <a className="sidenav-item-link" href="/main-category">
                  <span className="nav-text">Main Category</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/sub-category">
                  <span className="nav-text">Sub Category</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* Products */}
        <li className="has-sub">
          <a className="sidenav-item-link" href="javascript:void(0)">
            <i className="mdi mdi-palette-advanced" />
            <span className="nav-text">Products</span> <b className="caret" />
          </a>
          <div className="collapse">
            <ul className="sub-menu" id="products" data-parent="#sidebar-menu">
              <li className>
                <a className="sidenav-item-link" href="/product-add">
                  <span className="nav-text">Add Product</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/product-list">
                  <span className="nav-text">List Product</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* Orders */}
        <li className="has-sub">
          <a className="sidenav-item-link" href="javascript:void(0)">
            <i className="mdi mdi-cart" />
            <span className="nav-text">Orders</span> <b className="caret" />
          </a>
          <div className="collapse">
            <ul className="sub-menu" id="orders" data-parent="#sidebar-menu">
              <li className>
                <a className="sidenav-item-link" href="/new-order">
                  <span className="nav-text">New Order</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/order-history">
                  <span className="nav-text">Order History</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/order-detail">
                  <span className="nav-text">Order Detail</span>
                </a>
              </li>
              <li className>
                <a className="sidenav-item-link" href="/invoice">
                  <span className="nav-text">Invoice</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
        {/* Authentication */}
        <li className="has-sub">
          <a className="sidenav-item-link" href="javascript:void(0)">
            <i className="mdi mdi-login" />
            <span className="nav-text">Authentication</span> <b className="caret" />
          </a>
          <div className="collapse">
            <ul className="sub-menu" id="authentication" data-parent="#sidebar-menu">
              <li className>
                <a href="/login">
                  <span className="nav-text">Sign In</span>
                </a>
              </li>
              <li className>
                <a href="/signup">
                  <span className="nav-text">Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}
