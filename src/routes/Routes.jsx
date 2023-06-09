import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
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
import SignUp from '../pages/SignUp/SignUp'
import Login from '../pages/Login/Login'
import Instructors from '../pages/Instructor/Instructors'
import ClassDetails from '../components/ClassDetails'
import PrivateRoute from './PrivateRoute'

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
        path: '/instructors',
        element: <Instructors />
      },
      {
        path: '/classes',
        element: <Classes />
      },
      {
        path: '/classDetails/:id',
        element: <PrivateRoute><ClassDetails/></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/classes/${params.id}`)
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
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
            // loader: () => fetch('http://localhost:5000/classes')
          },
          {
            path: 'manageClass',
            element: <ManageClass />,
            loader: () => fetch('http://localhost:5000/classes')
          },
          {
            path: 'manageUsers',
            element: <ManageUsers />,
            loader: () => fetch('http://localhost:5000/users')
          }
        ]
      }
    ]
  },
])
