import React from 'react'

export const RecentOrders = () => {
  return (
    <div className="row">
      <div className="col-12 p-b-15">
        {/* Recent Order Table */}
        <div
          className="card card-table-border-none card-default recent-orders"
          id="recent-orders"
        >
          <div className="card-header justify-content-between">
            <h2>Recent Orders</h2>
            <div className="date-range-report">
              <span />
            </div>
          </div>
          <div className="card-body pt-0 pb-5">
            <table
              className="table card-table table-responsive table-responsive-large"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product Name</th>
                  <th className="d-none d-lg-table-cell">Units</th>
                  <th className="d-none d-lg-table-cell">Order Date</th>
                  <th className="d-none d-lg-table-cell">Order Cost</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24541</td>
                  <td>
                    <a className="text-dark" href>
                      {" "}
                      Coach Swagger
                    </a>
                  </td>
                  <td className="d-none d-lg-table-cell">1 Unit</td>
                  <td className="d-none d-lg-table-cell">Oct 20, 2018</td>
                  <td className="d-none d-lg-table-cell">$230</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                      <a
                        className="dropdown-toggle icon-burger-mini"
                        href
                        role="button"
                        id="dropdown-recent-order1"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      />
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <a href="#">View</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>24541</td>
                  <td>
                    <a className="text-dark" href>
                      {" "}
                      Toddler Shoes, Gucci Watch
                    </a>
                  </td>
                  <td className="d-none d-lg-table-cell">2 Units</td>
                  <td className="d-none d-lg-table-cell">Nov 15, 2018</td>
                  <td className="d-none d-lg-table-cell">$550</td>
                  <td>
                    <span className="badge badge-primary">Delayed</span>
                  </td>
                  <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                      <a
                        className="dropdown-toggle icon-burger-mini"
                        href="#"
                        role="button"
                        id="dropdown-recent-order2"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      />
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <a href="#">View</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>24541</td>
                  <td>
                    <a className="text-dark" href>
                      {" "}
                      Hat Black Suits
                    </a>
                  </td>
                  <td className="d-none d-lg-table-cell">1 Unit</td>
                  <td className="d-none d-lg-table-cell">Nov 18, 2018</td>
                  <td className="d-none d-lg-table-cell">$325</td>
                  <td>
                    <span className="badge badge-warning">On Hold</span>
                  </td>
                  <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                      <a
                        className="dropdown-toggle icon-burger-mini"
                        href="#"
                        role="button"
                        id="dropdown-recent-order3"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      />
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <a href="#">View</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>24541</td>
                  <td>
                    <a className="text-dark" href>
                      {" "}
                      Backpack Gents, Swimming Cap Slin
                    </a>
                  </td>
                  <td className="d-none d-lg-table-cell">5 Units</td>
                  <td className="d-none d-lg-table-cell">Dec 13, 2018</td>
                  <td className="d-none d-lg-table-cell">$200</td>
                  <td>
                    <span className="badge badge-success">Completed</span>
                  </td>
                  <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                      <a
                        className="dropdown-toggle icon-burger-mini"
                        href="#"
                        role="button"
                        id="dropdown-recent-order4"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      />
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <a href="#">View</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>24541</td>
                  <td>
                    <a className="text-dark" href>
                      {" "}
                      Speed 500 Ignite
                    </a>
                  </td>
                  <td className="d-none d-lg-table-cell">1 Unit</td>
                  <td className="d-none d-lg-table-cell">Dec 23, 2018</td>
                  <td className="d-none d-lg-table-cell">$150</td>
                  <td>
                    <span className="badge badge-danger">Cancelled</span>
                  </td>
                  <td className="text-right">
                    <div className="dropdown show d-inline-block widget-dropdown">
                      <a
                        className="dropdown-toggle icon-burger-mini"
                        href="#"
                        role="button"
                        id="dropdown-recent-order5"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        data-display="static"
                      />
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item">
                          <a href="#">View</a>
                        </li>
                        <li className="dropdown-item">
                          <a href="#">Remove</a>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
