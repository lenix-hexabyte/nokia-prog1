import React from "react";
import EntryData from "./Entry";
import "./App.css";
function App() {
  return (
    <div>
      <div className="top-bar">
        <div className="topbar-entry">
          <div className="Date">Date :</div>
          <div className="p-name">Process Name :</div>
          <div className="p-id">Process ID :</div>
          <div className="p-count">Process Count :</div>
        </div>
        <div className="topbar-input">
          <input type="date" />
          <input />
          <input />
          <input />
        </div>
      </div>
      <div className="entry-details">
        <div className="p-detail-entry body-group">
          <h3>
            Process Level Entry {" : "}
            <div className="button-group">
              <button className="add-button"> Add</button>
              <button className="modify-button">Modify/Delete</button>
            </div>
          </h3>
        </div>
        <EntryData />
        <div className="check-detail-entry body-group">
          {" "}
          <h3>
            Want To check Detail Entry {": "}
            <div className="button-group">
              <button className="add-button"> Add</button>
              <button className="modify-button">Modify/Delete</button>
            </div>
          </h3>
        </div>
        <EntryData />
        <div className="standard-detail-entry body-group">
          <h3>
            Standards Detail Entry {": "}
            <div className="button-group">
              <button className="add-button"> Add</button>
              <button className="modify-button">Modify/Delete </button>
            </div>
          </h3>
        </div>
        <EntryData />
        <div className="how-detail-entry body-group">
          <h3>
            How To check Detail Entry -{": "}
            <div className="button-group">
              <button className="add-button"> Add</button>
              <button className="modify-button">Modify/Delete</button>
            </div>
          </h3>
        </div>
        <EntryData />
      </div>
      <div className="footer-buttons">
        <button className="add-button">Add</button>
        <button className="modify-button">Modify</button>
        <button className="modify-button">Delete</button>
      </div>
    </div>
  );
}

export default App;
