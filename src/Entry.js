import React from "react";
import "./Entry.css";
function Entry() {
  return (
    <div className="processes">
      <div className="table">
        <table className="process-table">
          <td>
            <h4>Process ID</h4>
            <tr>123123</tr>
          </td>
          <td>
            <h4>SubProcess Code</h4>
            <tr>123123</tr>
          </td>
          <td>
            <h4>Sub-Process Name</h4>
            <tr>Process1</tr>
          </td>
          <td>
            <h4> Sub-Process Heading</h4>
            <tr>Process3</tr>
          </td>
          <td>
            <h4> PreCaution</h4>
            <tr>caution</tr>
          </td>
          <td>
            <h4>Image Video Location</h4>
            <tr>chennai</tr>
          </td>
        </table>
      </div>
    </div>
  );
}

export default Entry;
