import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css";
function HomePage() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="dashboard">
      <div className="date">
        <h3>Fri,28March</h3>
        <input type="text" placeholder="serch for something"></input>
        <i class="fas fa-bell fa-2x"></i>
      </div>
      <br />
      <h1>Good Morning,Sir.</h1>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Holi Holiday</h5>

              <p class="card-text">
                Activate every muscle group to get the results yo have always
                wanted.
              </p>
              <p>16 March 2021</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Holi Holiday</h5>

              <p class="card-text">
                Activate every muscle group to get the results yo have always
                wanted.
              </p>
              <p>16 March 2021</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Holi Holiday</h5>

              <p class="card-text">
                Activate every muscle group to get the results yo have always
                wanted.
              </p>
              <p>16 March 2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row d-flex">
        <div className="col-lg-6 col-md-12 col-sm-12 box1">
          <div className="percentage">
            <h3>Attendence</h3>
            <p>Total Overall Attendence</p>
          </div>
          <br />
          <div className="present">
            <p>Toatl Students Present</p>
            <h1>1072</h1>
          </div>
          <br />
          <div className="attendence-details">
            <div className="details">
              <p>Present(%)</p>
              <p>98%</p>
            </div>
            <div className="details">
              <p>Absent(%)</p>
              <p>02%</p>
            </div>
            <div className="details">
              <p>Absent</p>
              <p>21</p>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12 box2">
          <h3>Calendar</h3>
          <Calendar
            className="react-calendar"
            onChange={(e) => setDate(date)}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
