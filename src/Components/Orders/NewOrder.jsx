import React from 'react'

export const NewOrder = () => {
  return (
  <div className="ec-page-wrapper">
  <div className="ec-content-wrapper">
    <div className="content">
      <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
        <h1>New Orders</h1>
        <p className="breadcrumbs"><span><a href="index.html">Home</a></span>
          <span><i className="mdi mdi-chevron-right" /></span>Orders
        </p>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card card-default">
            <div className="card-body">
              <div className="table-responsive">
                <table id="responsive-data-table" className="table" style={{width: '100%'}}>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Item</th>
                      <th>Name</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Price</th>
                      <th>Payment</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>785</td>
                      <td><img className="product-img tbl-img" src="assets/img/products/p10.jpg" alt="product" /></td>
                      <td>Men casual shoes</td>
                      <td><strong>Pintos Martino</strong><br />
                        martino0777@example.com
                      </td>
                      <td>10</td>
                      <td>$280</td>
                      <td>COD</td>
                      <td><span className="mb-2 mr-2 badge badge-success">Delivered</span>
                      </td>
                      <td>2021-10-30</td>
                      <td>
                        <div className="btn-group mb-1">
                          <button type="button" className="btn btn-outline-success">Info</button>
                          <button type="button" className="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                            <span className="sr-only">Info</span>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Detail</a>
                            <a className="dropdown-item" href="#">Track</a>
                            <a className="dropdown-item" href="#">Cancel</a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> {/* End Content */}
  </div>
</div>

  )
}
