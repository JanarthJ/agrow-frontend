import React, { Component } from 'react'
import Card from '../common/card.component'
import "./dashboard.css";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* Left Area  */}

        <div className="dashboard-left">
          <li>
            <p></p>
            <p><button>Home</button></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p><button>Sign in</button></p>
            <p></p>
          </li>
          <li>
            <p></p>
            <p><button>Login</button></p>
            <p></p>
          </li>
        </div>
        {/* Top Area */}

        <div className="dashboard-top">
          <h1>Dashboard</h1>
        </div>

        {/* Center Area */}
        <div className="dashboard-card-grid">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}

export default Dashboard