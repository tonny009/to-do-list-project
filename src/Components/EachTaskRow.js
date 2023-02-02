import React from 'react'
import { useNavigate } from 'react-router-dom'
import { updateTaskData } from './updateParticularTask'

const EachTaskRow = ({ task, handleDelete }) => {
  const { id, title, status, progress, creatingdate } = task
  const navigate = useNavigate()

  const handleProgressEdit = (proNumber, id) => {
    navigate(`/editProgress/${id}`)
  }

  const handleStatus = (id) => {
    fetch(`http://localhost:8000/lists/${id}`)
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        console.log(resp)
        const title = resp.title
        const status = 'Finished'
        const progress = resp.progress
        const creatingdate = resp.creatingdate

        const completedTask = { id, title, status, progress, creatingdate }
        console.log(completedTask)
        updateTaskData(completedTask)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <tr className="table_row">
      <td>
        <div>
          <div className="md:text-2xl">{title}</div>
          {status === 'Finished' && (
            <div className="text-green-800">100% Done</div>
          )}
          {status !== 'Finished' && (
            <div className="text-blue-900">[{progress}% Done]</div>
          )}
        </div>
      </td>
      <td>
        {status === 'Incomplete' && (
          <button
            onClick={() => {
              handleProgressEdit(30, id)
            }}
            className="btn btn-outline btn-primary w-30 mr-2 border-4"
          >
            <h3 className="text-black font-bold">Edit Progress</h3>
          </button>
        )}
        {status === 'Finished' && (
          <button
            disabled
            onClick={() => {
              handleProgressEdit(30, id)
            }}
            className="btn btn-outline btn-primary w-30 mr-2 border-4"
          >
            <h3 className="text-black font-bold">Edit Progress</h3>
          </button>
        )}
      </td>

      <td>
        {status === 'Incomplete' && (
          <>
            {status}
            <div className="mt-2">
              <button
                onClick={() => {
                  handleStatus(id)
                }}
                className="btn btn-success font-bold w-25"
              >
                Completed!
              </button>
            </div>
          </>
        )}
        {status === 'Finished' && (
          <>
            <div className="text-green-900 bg-green-200 p-3 w-28 rounded-xl">
              Finished !
            </div>
          </>
        )}
      </td>
      <td>
        <div>
          <button
            onClick={() => {
              handleDelete(id)
            }}
            className="btn btn-error font-bold"
          >
            Delete Task
          </button>
        </div>
      </td>
    </tr>
  )
}

export default EachTaskRow
