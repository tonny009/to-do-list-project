export const updateTaskData = (taskData) => {
  console.log(taskData)
  fetch(`http://localhost:8000/lists/${taskData.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(taskData),
  })
    .then((res) => {
      alert('Yay! Finished........')
      window.location.reload()
    })
    .catch((err) => {
      console.log(err.message)
    })
}
