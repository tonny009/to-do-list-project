import logo from './logo.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './Components/Main'
import './Components/main.css'
import AddTask from './Components/AddTask'
import Home from './Components/Home'
import ToDoTaskList from './Components/ToDoTaskList'
import EditProgress from './Components/EditProgress'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      // loader: () => fetch('projects.json'),
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/addTask',
          element: <AddTask></AddTask>,
        },
        {
          path: '/taskList',
          loader: () => fetch('http://localhost:8000/lists'),
          element: <ToDoTaskList></ToDoTaskList>,
        },
        {
          path: '/editProgress/:id',
          element: <EditProgress></EditProgress>,
        },
      ],
    },
  ])
  return (
    <div className="full-bg">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
