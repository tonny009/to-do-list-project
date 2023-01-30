import { format } from 'date-fns'
import React from 'react'

const AddTask = () => {
  const handleTaskSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const day = form.day.value
    const title = form.title.value
    const status = 'Incomplete'
    const progress = 0
    const creatingdate = format(new Date(), 'Pp')
    const taskDetails = { title, status, progress, creatingdate }

    fetch(' http://localhost:8000/lists', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(taskDetails),
    }).then(() => {
      console.log('New task added')
    })
  }
  return (
    // div ith form and add button--------
    <div className="flex flex-col md:flex-row text-cyan-900 antialiased md:mt-0 mt-10  h-screen justify-center items-center  ">
      <div className="bg-cyan-700 bg-opacity-50 max-w-4xl w-full rounded-xl shadow-lg shadow-white p-8 flex flex-col md:flex-row">
        {/* form div----- */}
        <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-1/2 mr-6">
          <form
            action=""
            onSubmit={handleTaskSubmit}
            className="flex flex-col "
          >
            <h1 className="text-center mb-4 font-bold text-xl text-cyan-600">
              Upcoming Task Details
            </h1>
            <div className="flex flex-col pb-2">
              <label className="text-xm">Day Number</label>
              <input
                type="number"
                placeholder="Day Number"
                name="day"
                className="input ring-1 ring-cyan-800 outline-none w-full max-w-xs focus:ring-teal-900 focus:ring-2 p-4 mt-2"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label className="text-xm">Task Name</label>
              <input
                type="text"
                placeholder="Write your task name here...."
                name="title"
                className="input ring-1 ring-cyan-800 outline-none w-full max-w-xs focus:ring-teal-900 focus:ring-2 p-4 mt-2"
              />
            </div>
            <div className="flex flex-col pb-2">
              <label className="text-xm">Task Status</label>
              <input
                type="text"
                placeholder="Write your task name here...."
                name="status"
                defaultValue={'Incomplete'}
                disabled
                className="input ring-1 ring-cyan-800 outline-none w-full max-w-xs focus:ring-teal-900 focus:ring-2 p-4 mt-2"
              />
            </div>

            <div className="flex flex-col pb-2">
              <label className="text-xm">Task Progress</label>
              <input
                type="text"
                placeholder="Write your task name here...."
                name="progress"
                defaultValue={0 + '%'}
                disabled
                className="input ring-1 ring-cyan-800 outline-none w-full max-w-xs focus:ring-teal-900 focus:ring-2 p-4 mt-2"
              />
            </div>
            <div>
              <button className="w-full px-2 py-3 mt-4 rounded-xl bg-gradient-to-r text-xl text-white from-teal-500 to-purple-900 cursor-pointer duration-200 hover:scale-110">
                <input type="submit" value="ADD TO TASK LIST " />
              </button>
            </div>
          </form>
        </div>

        {/* Button Div-------- */}
        <div className="flex flex-col justify-center items-center md:ml-10">
          <div>
            <button className="w-full px-2 py-3 m-4 rounded-xl bg-gradient-to-r text-xl text-white from-teal-500 to-purple-900 cursor-pointer duration-200 hover:scale-110">
              <a href="/">BACK TO HOMEPAGE</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTask
