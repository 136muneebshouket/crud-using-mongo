import React from 'react'
import { Outlet, Link } from 'react-router-dom'
export default function navbar() {
  return (<>
    <div><nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
        <h3 className='text-light' >Assignment</h3>
       
        <ul className="navbar-nav">
            <ul className="list-group list-group-horizontal">
                <li className="btn btn-outline-success"> <Link to="/" className='text-light'>Home</Link> </li> &nbsp;&nbsp;
                <li className="btn btn-outline-success"> <Link to="/users" className='text-light'>Users</Link> </li>&nbsp;&nbsp;

                
            </ul>

        </ul>
    </div>
</nav></div>
</>
  )
}

