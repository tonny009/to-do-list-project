import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-white max-h-screen flex flex-col justify-center items-center ">
      {/* this div is the welcome line div of home screen */}
      <div className=" flex flex-col  md:flex-row justify-center items-center mt-56">
        <div className="flex  justify-center items-center">
          <p className="text-6xl font-bold">Welc</p>
          <div className="w-9 h-9 border-8 border-dashed rounded-full animate-spin mt-3 border-green-400"></div>
          <p className="text-6xl font-bold mr-2">me</p>
          <p className="text-6xl font-bold mr-2">To</p>
        </div>
        <div>
          <p className="text-6xl font-bold">Track-Crack ...</p>
        </div>
      </div>

      {/* This div is for buttons under welcome line...... */}
      <div className="grid md:grid-cols-2 gap-9 mt-8 ">
        <div>
          <Link to="/addTask">
            <button className="btn btn-accent  w-48 h-20 text-xl font-bold p-3 ">
              Add Your Work
            </button>
          </Link>
        </div>
        <div>
          <Link to="/taskList">
            <button className="btn btn-accent w-48 h-20 text-xl font-bold p-3 ">
              To Do List
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
