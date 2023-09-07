import React from 'react'

export const UsersList = () => {
  return (
           <div className="ec-page-wrapper">

<div className="ec-content-wrapper">
  <div className="content">
    <div className="breadcrumb-wrapper breadcrumb-contacts">
      <div>
        <h1>User List</h1>
        <p className="breadcrumbs"><span><a href="index.html">Home</a></span>
          <span><i className="mdi mdi-chevron-right" /></span>User
        </p>
      </div>
      <div>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addUser"> Add User
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="ec-vendor-list card card-default">
          <div className="card-body">
            <div className="table-responsive">
              <table id="responsive-data-table" className="table">
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Total Buy</th>
                    <th>Status</th>
                    <th>Join On</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img className="vendor-thumb" src="/assets/img/vendor/u1.jpg" alt="user profile" /></td>
                    <td>Marlee Rena</td>
                    <td>marleerena@gmail.com</td>
                    <td>+1-256-325-8652</td>
                    <td>2161</td>
                    <td>ACTIVE</td>
                    <td>2021-10-30</td>
                    <td>
                      <div className="btn-group mb-1">
                        <button type="button" className="btn btn-outline-success">Info</button>
                        <button type="button" className="btn btn-outline-success dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                          <span className="sr-only">Info</span>
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">Edit</a>
                          <a className="dropdown-item" href="#">Delete</a>
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
    {/* Add User Modal  */}
    <div className="modal fade modal-add-contact" id="addUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <form>
            <div className="modal-header px-4">
              <h5 className="modal-title" id="exampleModalCenterTitle">Add New User</h5>
            </div>
            <div className="modal-body px-4">
              <div className="form-group row mb-6">
                <label htmlFor="coverImage" className="col-sm-4 col-lg-2 col-form-label">User
                  Image</label>
                <div className="col-sm-8 col-lg-10">
                  <div className="custom-file mb-1">
                    <input type="file" className="custom-file-input" id="coverImage" required />
                    <label className="custom-file-label" htmlFor="coverImage">Choose
                      file...</label>
                    <div className="invalid-feedback">Example invalid custom file feedback
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" className="form-control" id="firstName" defaultValue="John" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" className="form-control" id="lastName" defaultValue="Deo" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <label htmlFor="userName">User name</label>
                    <input type="text" className="form-control" id="userName" defaultValue="johndoe" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" defaultValue="johnexample@gmail.com" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <label htmlFor="Birthday">Birthday</label>
                    <input type="text" className="form-control" id="Birthday" defaultValue="10-12-1991" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-4">
                    <label htmlFor="event">Address</label>
                    <input type="text" className="form-control" id="event" defaultValue="Address here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer px-4">
              <button type="button" className="btn btn-secondary btn-pill" data-bs-dismiss="modal">Cancel</button>
              <button type="button" className="btn btn-primary btn-pill">Save Contact</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> {/* End Content */}
</div> 
</div>
  )
}
