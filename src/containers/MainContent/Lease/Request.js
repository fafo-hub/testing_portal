import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import RequestList from "./data/Data";


function Request() {
  return (
    <div className="page-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card m-b-20">
              <div className="card-body">
                <h4 className="mt-0 header-title">Lease Requests</h4>
                <p className="text-muted m-b-30 font-14">
                  This is a list of all lease request made by mobile users.
                </p>

                {/* Table list  */}
                <div className="table-rep-plugin">
                  <div
                    className="table-responsive mb-0"
                    data-pattern="priority-columns"
                  >
                    <table
                      id="tech-companies-1"
                      className="table  table-striped"
                    >
                      {/* Table Head  */}

                      <thead>
                        <tr>
                          {/* <th>
                            <input type="checkbox" name="" id="" />
                          </th> */}
                          <th data-priority="1">DATE</th>
                          <th data-priority="3">NAME</th>
                          <th data-priority="3">LEASE TYPE</th>
                          <th data-priority="6">PRODUCT CATEGORY</th>
                          <th data-priority="6">PRODUCT TYPE</th>
                          <th data-priority="6">DURATION</th>
                          <th data-priority="1">CREDIT SCORE</th>
                          <th data-priority="3">Price</th>
                          <th data-priority="6"></th>
                        </tr>
                      </thead>

                      {/* Table Head  */}

                      {/* Table Body  */}

                      <tbody>
                        {RequestList.map((request) => (
                          <tr key={request.id}>
                            <td>{request.date}</td>
                            <td>{request.name}</td>
                            <td>{request.leaseType}</td>
                            <td>{request.category}</td>
                            <td>{request.productType}</td>
                            <td>{request.duration}</td>
                            <td>{request.creditScore}</td>
                            <td>{`₦${request.price.toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}`}</td>
                            <td>
                              <Link to={`/lease-request/${request.id}`}>
                                <Button outline color="dark">
                                  VIEW
                                </Button>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>

                      {/* Table Body  */}
                    </table>
                  </div>
                </div>

                {/* Table list  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Request;
