import React from 'react'

export const SalesReport = () => {
  return (
    <div className="row">
      <div className="col-xl-8 col-md-12 p-b-15">
        {/* Sales Graph */}
        <div id="user-acquisition" className="card card-default">
          <div className="card-header">
            <h2>Sales Report</h2>
          </div>
          <div className="card-body">
            <ul
              className="nav nav-tabs nav-style-border justify-content-between justify-content-lg-start border-bottom"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  data-bs-toggle="tab"
                  href="#todays"
                  role="tab"
                  aria-selected="true"
                >
                  Today's
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#monthly"
                  role="tab"
                  aria-selected="false"
                >
                  Monthly{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#yearly"
                  role="tab"
                  aria-selected="false"
                >
                  Yearly
                </a>
              </li>
            </ul>
            <div className="tab-content pt-4" id="salesReport">
              <div
                className="tab-pane fade show active"
                id="source-medium"
                role="tabpanel"
              >
                <div className="mb-6" style={{ maxHeight: 247 }}>
                  <canvas id="acquisition" className="chartjs2" />
                  <div id="acqLegend" className="customLegend mb-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-12 p-b-15">
        {/* Doughnut Chart */}
        <div className="card card-default">
          <div className="card-header justify-content-center">
            <h2>Orders Overview</h2>
          </div>
          <div className="card-body">
            <canvas id="doChart" />
          </div>
          <a href="#" className="pb-5 d-block text-center text-muted">
            <i className="mdi mdi-download mr-2" /> Download overall report
          </a>
          <div className="card-footer d-flex flex-wrap bg-white p-0">
            <div className="col-6">
              <div className="p-20">
                <ul className="d-flex flex-column justify-content-between">
                  <li className="mb-2">
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#4c84ff" }}
                    />
                    Order Completed
                  </li>
                  <li className="mb-2">
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#80e1c1" }}
                    />
                    Order Unpaid
                  </li>
                  <li>
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#ff7b7b" }}
                    />
                    Order returned
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 border-left">
              <div className="p-20">
                <ul className="d-flex flex-column justify-content-between">
                  <li className="mb-2">
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#8061ef" }}
                    />
                    Order Pending
                  </li>
                  <li className="mb-2">
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#ffa128" }}
                    />
                    Order Canceled
                  </li>
                  <li>
                    <i
                      className="mdi mdi-checkbox-blank-circle-outline mr-2"
                      style={{ color: "#7be6ff" }}
                    />
                    Order Broken
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
