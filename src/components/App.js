import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div className="container-fluid">
      <h4>Event Reminder</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle"></input>
          <label htmlFor="formEventBody: ;">Body</label>
          <textarea className="form-control" id="formEventBody"></textarea>
        </div>
      </form>
      <button className="btn btn-primary">Make event</button>
      <button className="btn btn-secondary">Delete all events</button>
      <h4>Event List</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default App;
