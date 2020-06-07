import 'bootstrap/dist/css/bootstrap.min.css';
import './dash.css';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Centerdash from './Centerdash';
import DashItem from './DashboardNav';

class Dashboard extends Component {
  state = {};

  render() {
    return (
      <div className="home">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="navi">
                {DashItem.map((i) => (
                  <div className="navi" key={i.id}>
                    <li className={i.Status}>
                      <a href={i.href}>
                        <i className="fa fa-home" aria-hidden="true">
                          <FontAwesomeIcon icon={i.icon} />
                        </i>
                        <span className="hidden-xs hidden-sm">{i.name}</span>
                      </a>
                    </li>
                  </div>
                ))}
              </div>
            </div>
            <Centerdash />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
