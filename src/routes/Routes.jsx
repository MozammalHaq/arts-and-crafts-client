import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import Instructor from '../pages/Instructor/Instructor'
import Classes from '../pages/Classes/Classes'
import SelectedClass from '../pages/Student/SelectedClass'
import EnrolledClass from '../pages/Student/EnrolledClass'
import Payment from '../pages/Student/Payment'
import AddClass from '../pages/Instructor/AddClass'
import MyClasses from '../pages/Instructor/MyClasses'
import ManageClass from '../pages/Admin/ManageClass'
import ManageUsers from '../pages/Admin/ManageUsers'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import Dashboard from '../Dashboard/Dashboard'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/instructor',
        element: <Instructor />
      },
      {
        path: '/classes',
        element: <Classes />
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
          {
            path: 'selectedClass',
            element: <SelectedClass />
          },
          {
            path: 'enrolledClass',
            element: <EnrolledClass />
          },
          {
            path: 'payment',
            element: <Payment />
          },
          {
            path: 'addClass',
            element: <AddClass />
          },
          {
            path: 'myClass',
            element: <MyClasses />
          },
          {
            path: 'manageClass',
            element: <ManageClass />
          },
          {
            path: 'manageUsers',
            element: <ManageUsers />
          }
        ]
      }
    ]
  },
])
