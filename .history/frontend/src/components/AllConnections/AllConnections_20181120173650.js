import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import Navbar from "../Common/Navbar";

import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Invitations from "./Invitations/Invitations";
import Recommendations from "./Recommendations/Recommendations";
import style1 from "./AllConnections.css.js";
import { register } from "../../serviceWorker";

class AllConnections extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar />
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-lg-3" />

              <div className="col-lg-7" style={myStyles.div_md7} />
              <div
                className="row"
                style={{
                  height: "130px",
                  marginTop: "10px"
                }}
              >
                <div className="col-md-2">
                  <img src="Kriti_Jar.jpg" style={style1.img} />
                </div>
                <div
                  className="col-md-5"
                  style={{
                    marginLeft: "20px"
                  }}
                >
                  <span>
                    <h2>
                      Kriti Jar
                      {/* {invitation.request_first_name} {invitation.request_last_name} */}
                    </h2>
                  </span>
                  <br />

                  <span style={style1.desc}>
                    Actively seeking summer internship opportunities\Graduate
                    computer science
                  </span>
                </div>
                <div className="col-md-4" style={{ marginTop: "50px" }}>
                  <button
                    class="btn btn-primary"
                    style={style1.accept}
                    // onClick={this.onAcceptClick.bind(this, invitation)}
                  >
                    ACCEPT
                  </button>
                  <button
                    class="btn btn-primary"
                    style={style1.ignore}
                    //onClick={this.onIgnoreClick.bind(this, invitation)}
                  >
                    IGNORE
                  </button>
                </div>
              </div>
              <div className="col-lg-2" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  //export default Signin;
}
export default AllConnections;
