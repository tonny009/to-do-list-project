import React, { useEffect, useState } from 'react'
import { useHistory, useLoaderData } from 'react-router-dom'
import EachTaskRow from './EachTaskRow'
import Loading from './Loading'
import './todolist.css'

const ToDoTaskList = () => {
  const getAllData = useLoaderData()
  const [data, setData] = useState(getAllData)
  const [loading, setLoading] = useState()

  const handleDelete = (id) => {
    setLoading(true)
    // console.log('Delete clicked', { id })
    if (window.confirm('Do you want to remove?')) {
      fetch(`http://localhost:8000/lists/${id}`, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.')
          window.location.reload()
          setLoading(false)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }
  }

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className=" w-full h-auto max-w-6xl  mx-auto ">
        <div className="text-center text-xl text-white font-bold mt-8">
          <div>
            <h2 className="text-3xl ">List of Your Work</h2>
          </div>

          {/* Table div------- */}
          <div className="overflow-x-auto mt-9 ">
            <table className="table w-full table_design ">
              <thead>
                <tr>
                  <th>Task Name</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Dates</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((task) => (
                  <EachTaskRow
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                  ></EachTaskRow>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <button className="w-1/2 px-2 py-3 m-4 rounded-xl bg-gradient-to-r text-xl text-white from-green-900 to-purple-900 cursor-pointer duration-200 hover:scale-110">
              <a href="/">BACK TO HOMEPAGE</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoTaskList
