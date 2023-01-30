import React from 'react'

const ToDoTaskList = () => {
  return (
    <div>
      <div className=" w-full h-auto max-w-5xl bg-slate-400 mx-auto ">
        <div className="text-center text-2xl font-bold mt-8">
          <h2>List of Your Work</h2>
          {/* Table div------- */}
          <div className="overflow-x-auto mt-9">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Task</th>
                  <th>Job</th>
                  <th>Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Cy Ganderton</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>

                <tr className="hover">
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>

                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>hi</div>
        </div>
      </div>
    </div>
  )
}

export default ToDoTaskList
