import React from 'react'

export const Invoice = () => {
  return (
   <div className="ec-page-wrapper">
  <div className="ec-content-wrapper">
    <div className="content">
      <div className="breadcrumb-wrapper breadcrumb-wrapper-2">
        <h1>Invoice</h1>
        <p className="breadcrumbs"><span><a href="index.html">Home</a></span>
          <span><i className="mdi mdi-chevron-right" /></span>Invoice
        </p>
      </div>
      <div className="card invoice-wrapper border-radius border bg-white p-4">
        <div className="d-flex justify-content-between">
          <h3 className="text-dark font-weight-medium">Invoice #125</h3>
          <div className="btn-group">
            <button className="btn btn-sm btn-primary">
              <i className="mdi mdi-content-save" /> Save
            </button>
            <button className="btn btn-sm btn-primary">
              <i className="mdi mdi-printer" /> Print
            </button>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <p className="text-dark mb-2">From</p>
            <address>
              <span>Ekka</span>
              <br /> 47 Elita Squre, VIP Chowk,
              <br /> <span>Email:</span> example@gmail.com
              <br /> <span>Phone:</span> +91 5264 251 325
            </address>
          </div>
          <div className="col-xl-3 col-lg-4 col-sm-6">
            <p className="text-dark mb-2">To</p>
            <address>
              <span>John Marle</span>
              <br /> 58 Jamie Ways, North Faye, Q5 5ZP
              <br /> <span>Email</span>: example@gmail.com
              <br /> <span>Phone:</span> +91 5264 521 943
            </address>
          </div>
          <div className="col-xl-4 disp-none" />
          <div className="col-xl-2 col-lg-4 col-sm-6">
            <p className="text-dark mb-2">Details</p>
            <address>
              <span>Invoice ID:</span>
              <span className="text-dark">#2365546</span>
              <br /><span>Date :</span> March 25, 2018
              <br /> <span>VAT:</span> PL6541215450
            </address>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table mt-3 table-striped table-responsive table-responsive-large inv-tbl" style={{width: '100%'}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Unit_Cost</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><img className="invoice-item-img" src="assets/img/products/p1.jpg" alt="product-image" /></td>
                <td>Baby Pink Shoese</td>
                <td>Amazing shoes with 10 day's replacement warrenty</td>
                <td>4</td>
                <td>$50.00</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="invoice-item-img" src="assets/img/products/p2.jpg" alt="product-image" /></td>
                <td>Man T-Shirt with Cap Style</td>
                <td>Long Sleeve men T-shirt with cap in Dark Blue Color</td>
                <td>10</td>
                <td>$50.00</td>
                <td>$500.00</td>
              </tr>
              <tr>
                <td>3</td>
                <td><img className="invoice-item-img" src="assets/img/products/p3.jpg" alt="product-image" /></td>
                <td>Full Sleeve T-Shirt for men</td>
                <td>Amazing T-shirt in pure Cotton for both</td>
                <td>10</td>
                <td>$20.00</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>4</td>
                <td><img className="invoice-item-img" src="assets/img/products/p4.jpg" alt="product-image" /></td>
                <td>Round Hat for Men</td>
                <td>Pure Leather Hat for men with black round tap</td>
                <td>6</td>
                <td>$50.00</td>
                <td>$300.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="row justify-content-end inc-total">
          <div className="col-lg-3 col-xl-3 col-xl-3 ml-sm-auto">
            <ul className="list-unstyled mt-3">
              <li className="mid pb-3 text-dark"> Subtotal
                <span className="d-inline-block float-right text-default">$1200.00</span>
              </li>
              <li className="mid pb-3 text-dark">Vat(10%)
                <span className="d-inline-block float-right text-default">$100.00</span>
              </li>
              <li className="pb-3 text-dark">Total
                <span className="d-inline-block float-right">$1300.00</span>
              </li>
            </ul>
            <a href="javascript:void(0)" className="btn btn-block mt-2 btn-primary btn-pill"> Procced to
              Payment</a>
          </div>
        </div>
      </div>
    </div> {/* End Content */}
  </div> 
</div>

  )
}
