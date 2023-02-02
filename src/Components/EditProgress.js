import React, { useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const EditProgress = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [status, setStatus] = useState()
  const [progress, setProgress] = useState()
  const [creatingdate, setCreatingdate] = useState()
  const [taskUpdatedData, setUpdatedTaskData] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8000/lists/${id}`)
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        console.log(resp)
        setTitle(resp.title)
        setStatus(resp.status)
        setProgress(resp.progress)
        setCreatingdate(resp.creatingdate)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  const handleProgressSubmit = (event) => {
    console.log('Edit ....')
    event.preventDefault()
    const form = event.target
    const updateProgress = form.progress.value
    const taskData = {
      id,
      title,
      status,
      progress: updateProgress,
      creatingdate,
    }

    fetch(`http://localhost:8000/lists/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(taskData),
    })
      .then((res) => {
        alert('Saved successfully.')

        navigate('/taskList')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <div className="flex flex-col  antialiased mt-52  justify-center items-center  ">
      <div className="bg-cyan-700 bg-opacity-50 max-w-5xl w-full rounded-xl shadow-lg shadow-indigo-300 p-8 flex flex-col md:flex-row justify-center items-center">
        <form
          action=""
          onSubmit={handleProgressSubmit}
          className="flex flex-col "
        >
          <div className="flex flex-col pb-2">
            <label className="text-xm text-white text-2xl font-bold mb-4">
              Update Your Task Progress
            </label>
            <input
              type="text"
              required
              placeholder="Your Progress in %..."
              name="progress"
              defaultValue={progress}
              className="input ring-1 ring-cyan-800 outline-none w-full max-w-xs focus:ring-teal-900 focus:ring-2 p-4 mt-2"
            />
          </div>
          <div>
            <button className="w-full px-2 py-3 mt-4 rounded-xl bg-gradient-to-r text-xl text-white from-teal-500 to-purple-900 cursor-pointer duration-200 hover:scale-110">
              <input type="submit" value="Update Task Progress" />
            </button>
          </div>
        </form>
      </div>
      <div>
        <button className="w-full px-2 py-3 m-4 mt-20 rounded-xl bg-gradient-to-r text-xl text-white from-teal-500 to-slate-900 cursor-pointer duration-200 hover:scale-110">
          <a href="/taskList">BACK TO Task List</a>
        </button>
      </div>
    </div>
  )
}

export default EditProgress
