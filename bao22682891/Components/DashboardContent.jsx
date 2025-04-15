import React from "react";
import "../CSS/DashboardContent.css";

const DashboardContent = () => {
  return (
    <div className="dashboard-container">
      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="card pink">
          <h4>Turnover</h4>
          <h2>$92,405</h2>
          <p className="green">▲ 5.39% period of change</p>
        </div>
        <div className="card blue">
          <h4>Profit</h4>
          <h2>$32,218</h2>
          <p className="green">▲ 5.39% period of change</p>
        </div>
        <div className="card blue">
          <h4>New Customers</h4>
          <h2>298</h2>
          <p className="green">▲ 6.84% period of change</p>
        </div>
      </div>

      {/* Table Section */}
      <div className="table-section">
        <div className="table-header">
          <h3>Detailed Report</h3>
          <div className="table-actions">
            <button className="action-btn">Import</button>
            <button className="action-btn">Export</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Order Value</th>
              <th>Order Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png" alt="" /> Elizabeth Lee</td>
              <td>AvatarSystems</td>
              <td>$359</td>
              <td>10/07/2023</td>
              <td><span className="badge new">New</span></td>
              <td>✏️</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png" alt="" /> Carlos Garcia</td>
              <td>SmoozeShift</td>
              <td>$747</td>
              <td>24/07/2023</td>
              <td><span className="badge new">New</span></td>
              <td>✏️</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png"alt="" /> Elizabeth Bailey</td>
              <td>Prime Time Telecom</td>
              <td>$564</td>
              <td>08/08/2023</td>
              <td><span className="badge progress">In-progress</span></td>
              <td>✏️</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png" alt="" /> Ryan Brown</td>
              <td>OmniTech Corporation</td>
              <td>$541</td>
              <td>31/08/2023</td>
              <td><span className="badge progress">In-progress</span></td>
              <td>✏️</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png" alt="" /> Ryan Young</td>
              <td>DataStream Inc.</td>
              <td>$769</td>
              <td>01/05/2023</td>
              <td><span className="badge completed">Completed</span></td>
              <td>✏️</td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td className="user-cell"><img src="../avatarPlaceholder.png" alt="" /> Hailey Adams</td>
              <td>FlowRush</td>
              <td>$922</td>
              <td>10/06/2023</td>
              <td><span className="badge completed">Completed</span></td>
              <td>✏️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardContent;
