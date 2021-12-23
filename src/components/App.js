import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from '../reducers/index'

const App = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const onClick = (event) => {
    event.preventDefault()
    dispatch({ type: "CREATE_EVENT", title:title, body:body })
    setTitle('')
    setBody('')
  }
  console.log(state)

  return (
    <div className="container-fluid">
      <h4>Event Reminder</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input className="form-control" id="formEventTitle" value={title} onChange={(e) => setTitle(e.target.value) }></input>
          <label htmlFor="formEventBody: ;">Body</label>
          <textarea className="form-control" id="formEventBody" value={body} onChange={e => setBody(e.target.value)}></textarea>
        </div>
      </form>
      <button className="btn btn-primary" onClick={onClick}>Make event</button>
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
