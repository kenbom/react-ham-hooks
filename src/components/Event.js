import React from "react";

const Event = (props) => {
    //   const item=props.item
    //   const index=props.index
    const {item, index, dispatch} = props
      const buttonClick = () => {dispatch({ type: "DELETE_EVENT", id: item.id })}
        
        return (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={buttonClick}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      }
 

export default Event;
