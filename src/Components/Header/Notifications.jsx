import React from 'react'

export const Notifications = () => {
  return (
    <li className="dropdown notifications-menu custom-dropdown">
      <button className="dropdown-toggle notify-toggler custom-dropdown-toggler">
        <i className="mdi mdi-bell-outline" />
      </button>
      <div className="card card-default dropdown-notify dropdown-menu-right mb-0">
        <div className="card-header card-header-border-bottom px-3">
          <h2>Notifications</h2>
        </div>
        <div className="card-body px-0 py-0">
          <ul
            className="nav nav-tabs nav-style-border p-0 justify-content-between"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item mx-3 my-0 py-0">
              <a
                href="#"
                className="nav-link active pb-3"
                id="home2-tab"
                data-bs-toggle="tab"
                data-bs-target="#home2"
                role="tab"
                aria-controls="home2"
                aria-selected="true"
              >
                All (10)
              </a>
            </li>
            <li className="nav-item mx-3 my-0 py-0">
              <a
                href="#"
                className="nav-link pb-3"
                id="profile2-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile2"
                role="tab"
                aria-controls="profile2"
                aria-selected="false"
              >
                Msgs (5)
              </a>
            </li>
            <li className="nav-item mx-3 my-0 py-0">
              <a
                href="#"
                className="nav-link pb-3"
                id="contact2-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact2"
                role="tab"
                aria-controls="contact2"
                aria-selected="false"
              >
                Others (5)
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myNotifications">
            <div
              className="tab-pane fade show active"
              id="home2"
              role="tabpanel"
            >
              <ul
                className="list-unstyled"
                data-simplebar
                style={{ height: 360 }}
              >
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u2.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Nitin</h4>
                        <p className="last-msg">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 30 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification media-active"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u1.jpg"
                        alt="Image"
                      />
                      <span className="status active" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Lovina</h4>
                        <p className="last-msg">
                          Donec mattis augue a nisl consequat, nec imperdiet ex
                          rutrum. Fusce et vehicula enim. Sed in enim eu odio
                          vehic.
                        </p>
                        <span className="font-size-12 font-weight-medium text-white">
                          <i className="mdi mdi-clock-outline" /> Just now...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u5.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Crinali</h4>
                        <p className="last-msg">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification event-active"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                      <i className="mdi mdi-calendar-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Upcomming event added</h4>
                        <p className="last-msg font-size-14">
                          03/Jan/2020 (1pm - 2pm)
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 10 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                      <i className="mdi mdi-chart-areaspline font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Yearly Sales report</h4>
                        <p className="last-msg font-size-14">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                      <i className="mdi mdi-account-multiple-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">New request</h4>
                        <p className="last-msg font-size-14">
                          Add Dany Jones as your contact consequat nec imperdiet
                          ex rutrum. Fusce et vehicula enim. Sed in enim.
                        </p>
                        <span className="my-1 btn btn-sm btn-success">
                          Accept
                        </span>
                        <span className="my-1 btn btn-sm btn-secondary">
                          Delete
                        </span>
                        <span className="font-size-12 font-weight-medium text-secondary d-block">
                          <i className="mdi mdi-clock-outline" /> 5 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                      <i className="mdi mdi-server-network-off font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Server overloaded</h4>
                        <p className="last-msg font-size-14">
                          Donec mattis augue a nisl consequat, nec imperdiet ex
                          rutrum. Fusce et vehicula enim. Sed in enim eu odio
                          vehic.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 30 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                      <i className="mdi mdi-playlist-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Task complete</h4>
                        <p className="last-msg font-size-14">
                          Nam ut nisi erat. Ut quis tortor varius, hendrerit
                          arcu quis, congue nisl. In scelerisque, sem ut ve.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 2 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="profile2" role="tabpanel">
              <ul
                className="list-unstyled"
                data-simplebar
                style={{ height: 360 }}
              >
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u6.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Hardiko</h4>
                        <p className="last-msg">
                          Donec mattis augue a nisl consequat, nec imperdiet ex
                          rutrum. Fusce et vehicula enim. Sed in enim eu odio
                          vehic.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u7.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Browin</h4>
                        <p className="last-msg">
                          Nam ut nisi erat. Ut quis tortor varius, hendrerit
                          arcu quis, congue nisl. In scelerisque, sem ut ve.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification media-active"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u1.jpg"
                        alt="Image"
                      />
                      <span className="status active" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">jenelia</h4>
                        <p className="last-msg">
                          Donec mattis augue a nisl consequat, nec imperdiet ex
                          rutrum. Fusce et vehicula enim. Sed in enim eu odio
                          vehic.
                        </p>
                        <span className="font-size-12 font-weight-medium text-white">
                          <i className="mdi mdi-clock-outline" /> Just now...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u2.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Bhavlio</h4>
                        <p className="last-msg">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="position-relative mr-3">
                      <img
                        className="rounded-circle"
                        src="assets/img/user/u5.jpg"
                        alt="Image"
                      />
                      <span className="status away" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Browini</h4>
                        <p className="last-msg">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-pane fade" id="contact2" role="tabpanel">
              <ul
                className="list-unstyled"
                data-simplebar
                style={{ height: 360 }}
              >
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification event-active"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-info text-white">
                      <i className="mdi mdi-calendar-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Upcomming event added</h4>
                        <p className="last-msg font-size-14">
                          03/Jan/2020 (1pm - 2pm)
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 10 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-warning text-white">
                      <i className="mdi mdi-chart-areaspline font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">New Sales report</h4>
                        <p className="last-msg font-size-14">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Nam itaque doloremque odio, eligendi delectus
                          vitae.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 1 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-primary text-white">
                      <i className="mdi mdi-account-multiple-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">New Request</h4>
                        <p className="last-msg font-size-14">
                          Add Dany Jones as your contact consequat nec imperdiet
                          ex rutrum. Fusce et vehicula enim. Sed in enim.
                        </p>
                        <span className="my-1 btn btn-sm btn-success">
                          Accept
                        </span>
                        <span className="my-1 btn btn-sm btn-secondary">
                          Delete
                        </span>
                        <span className="font-size-12 font-weight-medium text-secondary d-block">
                          <i className="mdi mdi-clock-outline" /> 5 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-danger text-white">
                      <i className="mdi mdi-server-network-off font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">Server overloaded</h4>
                        <p className="last-msg font-size-14">
                          Donec mattis augue a nisl consequat, nec imperdiet ex
                          rutrum. Fusce et vehicula enim. Sed in enim eu odio
                          vehic.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 30 min ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javscript:void(0)"
                    className="media media-message media-notification"
                  >
                    <div className="d-flex rounded-circle align-items-center justify-content-center mr-3 media-icon iconbox-45 bg-purple text-white">
                      <i className="mdi mdi-playlist-check font-size-20" />
                    </div>
                    <div className="media-body d-flex justify-content-between">
                      <div className="message-contents">
                        <h4 className="title">New Task complete</h4>
                        <p className="last-msg font-size-14">
                          Nam ut nisi erat. Ut quis tortor varius, hendrerit
                          arcu quis, congue nisl. In scelerisque, sem ut ve.
                        </p>
                        <span className="font-size-12 font-weight-medium text-secondary">
                          <i className="mdi mdi-clock-outline" /> 2 hrs ago...
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="dropdown-menu dropdown-menu-right d-none">
        <li className="dropdown-header">You have 5 notifications</li>
        <li>
          <a href="#">
            <i className="mdi mdi-account-plus" /> New user registered
            <span className=" font-size-12 d-inline-block float-right">
              <i className="mdi mdi-clock-outline" /> 10 AM
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-account-remove" /> User deleted
            <span className=" font-size-12 d-inline-block float-right">
              <i className="mdi mdi-clock-outline" /> 07 AM
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-chart-areaspline" /> Sales report is ready
            <span className=" font-size-12 d-inline-block float-right">
              <i className="mdi mdi-clock-outline" /> 12 PM
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-account-supervisor" /> New client
            <span className=" font-size-12 d-inline-block float-right">
              <i className="mdi mdi-clock-outline" /> 10 AM
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="mdi mdi-server-network-off" /> Server overloaded
            <span className=" font-size-12 d-inline-block float-right">
              <i className="mdi mdi-clock-outline" /> 05 AM
            </span>
          </a>
        </li>
        <li className="dropdown-footer">
          <a className="text-center" href="#">
            {" "}
            View All{" "}
          </a>
        </li>
      </ul>
    </li>
  );
}
