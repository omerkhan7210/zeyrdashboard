import React from 'react'
import {Search} from './Search'
import {Notifications} from './Notifications'

export const Header = () => {
  return (
<header className="ec-main-header" id="header">
  <nav className="navbar navbar-static-top navbar-expand-lg">
    {/* Sidebar toggle button */}
    <button id="sidebar-toggler" className="sidebar-toggle" />
    
   <Search/>
    <div className="navbar-right">
      <ul className="nav navbar-nav">
        {/* User Account */}
        <li className="dropdown user-menu">
          <button className="dropdown-toggle nav-link ec-drop" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="assets/img/user/user.png" className="user-image" alt="User Image" />
          </button>
          <ul className="dropdown-menu dropdown-menu-right ec-dropdown-menu">
            {/* User image */}
            <li className="dropdown-header">
              <img src="assets/img/user/user.png" className="img-circle" alt="User Image" />
              <div className="d-inline-block">
                John Deo <small className="pt-1">john.example@gmail.com</small>
              </div>
            </li>
            <li>
              <a href="/user-profile">
                <i className="mdi mdi-account" /> My Profile
              </a>
            </li>
           
            <li className="right-sidebar-in">
              <a href="javascript:0"> <i className="mdi mdi-settings-outline" /> Settings </a>
            </li>
            <li className="dropdown-footer">
              <a href="/"> <i className="mdi mdi-logout" /> Log Out </a>
            </li>
          </ul>
        </li>
        <Notifications/>
        <li className="right-sidebar-in right-sidebar-2-menu">
          <i className="mdi mdi-settings-outline mdi-spin" />
        </li>
      </ul>
    </div>
  </nav>
</header>

  )
}
