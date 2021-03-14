import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="side">
      <div class="container-fluid">
        <div class="row">
          <div class="sidebar">
            <div className="link-container">
              <i class="fas fa-school fa-3x"></i>
            </div>
            <div className="link-container">
              <i class="fas fa-home"></i>
              <Link className="link" to="/">
                Home
              </Link>
            </div>
            <div className="link-container">
              <i class="fas fa-clipboard"></i>
              <Link className="link" to="#">
                NoticeBoard
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-users"></i>
              <Link className="link" to="/attendence">
                Attendence
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-rupee-sign"></i>
              <Link className="link" to="#">
                FeeDetails
              </Link>
            </div>

            <div className="link-container">
              <i class="far fa-calendar-alt"></i>
              <Link className="link" to="#">
                Calender
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-photo-video"></i>
              <Link className="link" to="#">
                Multimedia
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-table"></i>
              <Link className="link" to="#">
                TimeTable
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-clock"></i>
              <Link className="link" to="#">
                Schedule
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-phone-square-alt"></i>
              <Link className="link" to="#">
                SupportRequest
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-flag"></i>
              <Link className="link" to="#">
                Support
              </Link>
            </div>

            <div className="link-container">
              <i class="fas fa-user-alt"></i>
              <Link className="link" to="#">
                Account
              </Link>
            </div>
            <br />
            <div className="link-container">
              <i class="fas fa-user-tie fa-2x"></i>
              <h5>Fr. Paul D'Souza</h5>
            </div>
            <h6 className="admin">Admin Account</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
