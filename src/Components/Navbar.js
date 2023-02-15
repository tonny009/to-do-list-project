import React from 'react'
import Pic from '../assests/profile.jpg'

const Navbar = () => {
  return (
    <div className="navbar bg-indigo-400 bg-opacity-70 sticky top-0">
      <div className="flex-1 md:pl-9 m-0">
        <a className="btn btn-ghost normal-case md:text-4xl text-2xl font-bold text-lime-200">
          Track-Crack
        </a>
      </div>
      <div className="flex gap-3 mr-3 md:mr-7">
        <a href="/addTask">
          <div className=" font-bold  md:p-3 text-lime-400 border-4 border-lime-200 p-1 rounded-lg hover:bg-green-900">
            Add-Task
          </div>
        </a>
        <a href="/taskList">
          <div className=" font-bold md:p-3 text-lime-400 border-4 border-lime-200 p-1 rounded-lg hover:bg-green-900">
            Work-List
          </div>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end md:mr-7">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-15 rounded-full">
              <img src={Pic} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
