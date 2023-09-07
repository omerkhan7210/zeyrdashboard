import React from 'react'

export const NewCustomers = () => {
  return (
    <div className="row">
      <div className="col-xl-5">
        {/* New Customers */}
        <div className="card ec-cust-card card-table-border-none card-default">
          <div className="card-header justify-content-between ">
            <h2>New Customers</h2>
            <div>
              <button className="text-black-50 mr-2 font-size-20">
                <i className="mdi mdi-cached" />
              </button>
              <div className="dropdown show d-inline-block widget-dropdown">
                <a
                  className="dropdown-toggle icon-burger-mini"
                  href="#"
                  role="button"
                  id="dropdown-customar"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                ></a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-item">
                    <a href="#">Action</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Another action</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body pt-0 pb-15px">
            <table className="table ">
              <tbody>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u1.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Selena Wagner
                          </h6>
                        </a>
                        <small>@selena.oi</small>
                      </div>
                    </div>
                  </td>
                  <td>2 Orders</td>
                  <td className="text-dark d-none d-md-block">$150</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u2.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Walter Reuter
                          </h6>
                        </a>
                        <small>@walter.me</small>
                      </div>
                    </div>
                  </td>
                  <td>5 Orders</td>
                  <td className="text-dark d-none d-md-block">$200</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u3.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Larissa Gebhardt
                          </h6>
                        </a>
                        <small>@larissa.gb</small>
                      </div>
                    </div>
                  </td>
                  <td>1 Order</td>
                  <td className="text-dark d-none d-md-block">$50</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u4.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Albrecht Straub
                          </h6>
                        </a>
                        <small>@albrech.as</small>
                      </div>
                    </div>
                  </td>
                  <td>2 Orders</td>
                  <td className="text-dark d-none d-md-block">$100</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u5.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Leopold Ebert
                          </h6>
                        </a>
                        <small>@leopold.et</small>
                      </div>
                    </div>
                  </td>
                  <td>1 Order</td>
                  <td className="text-dark d-none d-md-block">$60</td>
                </tr>
                <tr>
                  <td>
                    <div className="media">
                      <div className="media-image mr-3 rounded-circle">
                        <a href="profile.html">
                          <img
                            className="profile-img rounded-circle w-45"
                            src="assets/img/user/u3.jpg"
                            alt="customer image"
                          />
                        </a>
                      </div>
                      <div className="media-body align-self-center">
                        <a href="profile.html">
                          <h6 className="mt-0 text-dark font-weight-medium">
                            Larissa Gebhardt
                          </h6>
                        </a>
                        <small>@larissa.gb</small>
                      </div>
                    </div>
                  </td>
                  <td>1 Order</td>
                  <td className="text-dark d-none d-md-block">$50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-xl-7">
        {/* Top Products */}
        <div className="card card-default ec-card-top-prod">
          <div className="card-header justify-content-between">
            <h2>Top Products</h2>
            <div>
              <button className="text-black-50 mr-2 font-size-20">
                <i className="mdi mdi-cached" />
              </button>
              <div className="dropdown show d-inline-block widget-dropdown">
                <a
                  className="dropdown-toggle icon-burger-mini"
                  href="#"
                  role="button"
                  id="dropdown-product"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  data-display="static"
                ></a>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li className="dropdown-item">
                    <a href="#">Update Data</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Detailed Log</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Statistics</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#">Clear Data</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body mt-10px mb-10px py-0">
            <div className="row media d-flex pt-15px pb-15px">
              <div className="col-lg-3 col-md-3 col-2 media-image align-self-center rounded">
                <a href="#">
                  <img src="assets/img/products/p1.jpg" alt="customer image" />
                </a>
              </div>
              <div className="col-lg-9 col-md-9 col-10 media-body align-self-center ec-pos">
                <a href="#">
                  <h6 className="mb-10px text-dark font-weight-medium">
                    Baby cotton shoes
                  </h6>
                </a>
                <p className="float-md-right sale">
                  <span className="mr-2">58</span>Sales
                </p>
                <p className="d-none d-md-block">
                  Statement belting with double-turnlock hardware adds “swagger”
                  to a simple.
                </p>
                <p className="mb-0 ec-price">
                  <span className="text-dark">$520</span>
                  <del>$580</del>
                </p>
              </div>
            </div>
            <div className="row media d-flex pt-15px pb-15px">
              <div className="col-lg-3 col-md-3 col-2 media-image align-self-center rounded">
                <a href="#">
                  <img src="assets/img/products/p2.jpg" alt="customer image" />
                </a>
              </div>
              <div className="col-lg-9 col-md-9 col-10 media-body align-self-center ec-pos">
                <a href="#">
                  <h6 className="mb-10px text-dark font-weight-medium">
                    Hoodies for men
                  </h6>
                </a>
                <p className="float-md-right sale">
                  <span className="mr-2">20</span>Sales
                </p>
                <p className="d-none d-md-block">
                  Statement belting with double-turnlock hardware adds “swagger”
                  to a simple.
                </p>
                <p className="mb-0 ec-price">
                  <span className="text-dark">$250</span>
                  <del>$300</del>
                </p>
              </div>
            </div>
            <div className="row media d-flex pt-15px pb-15px">
              <div className="col-lg-3 col-md-3 col-2 media-image align-self-center rounded">
                <a href="#">
                  <img src="assets/img/products/p3.jpg" alt="customer image" />
                </a>
              </div>
              <div className="col-lg-9 col-md-9 col-10 media-body align-self-center ec-pos">
                <a href="#">
                  <h6 className="mb-10px text-dark font-weight-medium">
                    Long slive t-shirt
                  </h6>
                </a>
                <p className="float-md-right sale">
                  <span className="mr-2">10</span>Sales
                </p>
                <p className="d-none d-md-block">
                  Statement belting with double-turnlock hardware adds “swagger”
                  to a simple.
                </p>
                <p className="mb-0 ec-price">
                  <span className="text-dark">$480</span>
                  <del>$654</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
