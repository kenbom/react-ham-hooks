import React, { useReducer, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import reducer from "../reducers/index";
import Event from "./Event";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onClickMake = (event) => {
    event.preventDefault();
    dispatch({ type: "CREATE_EVENT", title: title, body: body });
    setTitle("");
    setBody("");
  };

  const onClickDeleteAll = (event) => {
    event.preventDefault();
    const result = window.confirm('Want to delete all?')
    if(result)dispatch({ type: "DELETE_ALLL_EVENTS" });
  };
    
  const creatable = title === "" || body === ""
  console.log(state);

  return (
    <div className="container-fluid">
      <h4>Event Reminder</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label htmlFor="formEventBody: ;">Body</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
      </form>
      <button className="btn btn-primary" onClick={onClickMake} disabled={creatable}>
        Make event
      </button>
      <button className="btn btn-secondary" onClick={onClickDeleteAll} disabled={state.length === 0}>Delete all events</button>
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
        <tbody>
          {state.map((item, index) => (<Event item={item} index={index} dispatch={dispatch} />))}
        </tbody>
      </table>
    </div>
  )
};

export default App;
