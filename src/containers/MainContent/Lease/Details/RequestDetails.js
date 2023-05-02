import React from "react";
import AUX from "../../../../hoc/Aux_";
import { Sparklines, SparklinesLine } from "react-sparklines";
import RequestList from "../data/Data";
import Avatar from "../assets/avatar.webp";
// import { useParams } from "react-router-dom";

function RequestDetails(props) {
  const id = props.match.params.id;
  const request = RequestList.find((request) => request.id === parseInt(id));

  return (
    <AUX>
      <div className="page-content-wrapper">
        <div className="container-fluid">
          <div className="col-12">
            {/* CARD  */}
            <div className="row">
              {/* First Card  */}
              <div className="col-lg-4">
                <div className="card m-b-20">
                  <div className="card-body">
                    <div className="media">
                      <img
                        className="d-flex mr-3 rounded-circle thumb-lg"
                        src={Avatar}
                        alt=""
                      />
                      <div className="media-body">
                        <h5 className="m-t-10 font-18 mb-1">{request.name}</h5>
                        <p className="text-muted m-b-5">{request.email}</p>
                        <p className="text-muted font-14 font-500 font-secondary">
                          {request.gender}
                        </p>
                      </div>
                    </div>

                    <div className="row text-center m-t-20">
                      <div className="col-6">
                        <h5 className="mb-0">{request.creditScore}</h5>
                        <p className="text-muted font-14">Credit Score</p>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">{request.approvedLease}</h5>
                        <p className="text-muted font-14">Approved Lease</p>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">{request.rejectedLease}</h5>
                        <p className="text-muted font-14">Rejected Lease</p>
                      </div>
                      <div className="col-6">
                        <h5 className="mb-0">{request.requestedLease}</h5>
                        <p className="text-muted font-14">Total Requested Lease</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* SECOND CARD  */}

              
            </div>

            {/* CARD  */}
            <div className="card m-b-20">
              <div className="card-body">Lease Item</div>
            </div>
          </div>
        </div>
      </div>
    </AUX>
  );
}

export default RequestDetails;
