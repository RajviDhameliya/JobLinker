import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import  Home from './components/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './admin/Companies'
import CreateCompany from './admin/CreateCompany'
import CompanySetup from './admin/CompanySetup'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/Jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/Browse',
    element: <Browse />
  },
  {
    path: '/Profile',
    element: <Profile />
  },


  // Admin and Company routes
{
  path:"/admin/companies",
  element : <Companies/>
},
{
  path:"/admin/companies/create",
  element : <CreateCompany/>
},
{
  path:"/admin/companies/:id",
  element : <CompanySetup/>
}

])


function App() {

  return (
    <>
      <RouterProvider router = {appRouter} />
    </>
  )
}

export default App