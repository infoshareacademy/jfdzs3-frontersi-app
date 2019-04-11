import React, { Component } from 'react';
import './dashboard.css';

import img_1 from "../../img/Dashboard/1.png";
import img_2 from "../../img/Dashboard/2.png";


class Dashboard extends Component {
  render() {
    return (
      <div className="App">
        <div className="dashboradWrapper">
          <div className="dashboradSectionMainCounter">
            <img className="dashboradImg_1" src={img_2}></img>
            <div className="dashboradMainCounter">7643</div>
            <img className="dashboradImg_2" src={img_1}></img>
          </div>
          <p className="dashboradTitleText">DASHBOARD</p>
          <div className="dashboardElementContener">
            <div className="dashboardElement">
              <div className="counterText">1534</div>
              <p className="dashboradText">ŁĄCZNA ILOŚĆ<br/>ZGUBIONYCH</p>
            </div>
            <div className="dashboardElement">
              <div className="counterText">5757</div>
              <p className="dashboradText">ŁĄCZNA ILOŚĆ<br/>ZNALEZIONYCH</p>
            </div>
            <div className="dashboardElement">
              <div className="counterText">976</div>
              <p className="dashboradText">ZNALEZIONE<br/>TELEFONY</p>
            </div>
            <div className="dashboardElement">
              <div className="counterText">153</div>
              <p className="dashboradText">ZWIERZĄT<br/>WRÓCIŁO DO DOMU</p>
            </div>
            <div className="dashboardElement">
              <div className="counterText">87</div>
              <p className="dashboradText">ODDANYCH<br/>PORTFELI</p>
            </div>
            <div className="dashboardElement">
              <div className="counterText">6</div>
              <p className="dashboradText">ZAGUBIONYCH<br/>MĘŻÓW</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;