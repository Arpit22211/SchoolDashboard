import React, { useState } from "react";
import "./App.css";

function Attendence() {
  const [color, setColor] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [color6, setColor6] = useState("");
  const [color7, setColor7] = useState("");
  const [color8, setColor8] = useState("");
  const [color9, setColor9] = useState("");
  const [color10, setColor10] = useState("");

  function Handler() {
    setColor("primary");
    setColor2("");
  }

  function Handler2() {
    setColor("");
    setColor2("red");
  }
  function Handler3() {
    setColor3("primary");
    setColor4("");
  }
  function Handler4() {
    setColor3("");
    setColor4("red");
  }
  function Handler5() {
    setColor5("primary");
    setColor6("");
  }
  function Handler6() {
    setColor5("");
    setColor6("red");
  }
  function Handler7() {
    setColor7("primary");
    setColor8("");
  }
  function Handler8() {
    setColor7("");
    setColor8("red");
  }
  function Handler9() {
    setColor9("primary");
    setColor10("");
  }
  function Handler10() {
    setColor9("");
    setColor10("red");
  }

  return (
    <div className="dashboard">
      <div className="attendence">
        <h1>Attendence</h1>
        <input type="text" placeholder="serch for something"></input>
        <i class="fas fa-bell fa-2x"></i>
      </div>
      <br />
      <div className="drop d-flex">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Class
          </button>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Section
          </button>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Month
          </button>
        </div>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Session
          </button>
        </div>
      </div>

      <div className="days d-flex">
        <div className="date-menu">
          <p>01</p>
          <p>Mon</p>
        </div>
        <div className="date-menu">
          <p>02</p>
          <p>Tue</p>
        </div>
        <div className="date-menu">
          <p>03</p>
          <p>Wed</p>
        </div>
        <div className="date-menu active">
          <p>04</p>
          <p>Thu</p>
        </div>
        <div className="date-menu">
          <p>05</p>
          <p>Fri</p>
        </div>
        <div className="date-menu">
          <p>06</p>
          <p>Sat</p>
        </div>
        <div className="date-menu">
          <p>07</p>
          <p>Sun</p>
        </div>
        <div className="date-menu">
          <p>08</p>
          <p>Mon</p>
        </div>
        <div className="date-menu">
          <p>09</p>
          <p>Tue</p>
        </div>
        <div className="date-menu">
          <p>10</p>
          <p>Wed</p>
        </div>
        <div className="date-menu">
          <p>11</p>
          <p>Thu</p>
        </div>
        <div className="date-menu">
          <p>12</p>
          <p>Fri</p>
        </div>
        <div className="date-menu">
          <p>13</p>
          <p>Sat</p>
        </div>
        <div className="date-menu">
          <p>14</p>
          <p>Sun</p>
        </div>
        <div className="date-menu">
          <p>15</p>
          <p>Mon</p>
        </div>
      </div>

      <div className="student">
        <div className="student-details d-flex">
          <p className="number">01st</p>
          <p className="name">Abhishek Yadav</p>
          <button onClick={Handler} className={`present-student ${color}`}>
            Present
          </button>
          <button onClick={Handler2} className={`absent ${color2}`}>
            Absent
          </button>
        </div>

        <div className="student-details d-flex">
          <p className="number">02nd</p>
          <p className="name">Abhishek Yadav</p>
          <button onClick={Handler3} className={`present-student ${color3}`}>
            Present
          </button>
          <button onClick={Handler4} className={`absent ${color4}`}>
            Absent
          </button>
        </div>
        <div className="student-details d-flex">
          <p className="number">03rd</p>
          <p className="name">Abhishek Yadav</p>
          <button onClick={Handler5} className={`present-student ${color5}`}>
            Present
          </button>
          <button onClick={Handler6} className={`absent ${color6}`}>
            Absent
          </button>
        </div>
        <div className="student-details d-flex">
          <p className="number">04th</p>
          <p className="name">Abhishek Yadav</p>
          <button onClick={Handler7} className={`present-student ${color7}`}>
            Present
          </button>
          <button onClick={Handler8} className={`absent ${color8}`}>
            Absent
          </button>
        </div>
        <div className="student-details d-flex">
          <p className="number">05th</p>
          <p className="name">Abhishek Yadav</p>
          <button onClick={Handler9} className={`present-student ${color9}`}>
            Present
          </button>
          <button onClick={Handler10} className={`absent ${color10}`}>
            Absent
          </button>
        </div>
      </div>
    </div>
  );
}

export default Attendence;
