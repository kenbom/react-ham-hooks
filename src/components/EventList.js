import React from 'react'
import Event from './Event'

const EventList = (props) => {
    const { state, dispatch } = props
    return (
        <div>
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
}

export default EventList
