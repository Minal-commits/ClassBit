import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeUi from './Screens/Home/HomeUi.jsx'
import Contact from './Screens/ContactDev/Contact.jsx'
import Problems from './Screens/solvableProblems/Problems.jsx'
import Teacher from './Screens/Teacher/Teacher.jsx'
import Student from './Screens/Student/Student.jsx'
import Auth from './Screens/Auth/Auth.jsx'
import CreateAProblem from './Screens/CreateAProblem/CreateAProblem.jsx'
import Problem from './Screens/Problem/Problem.jsx'
import Rankings from './Screens/Rankings/Rankings.jsx'
import { ToastContainer } from 'react-toastify'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<HomeUi/>}>
//       <Route path='' element={<HomeUi/>}/>
//       <Route path='contactdev' element={<Contact/>}/>
//       <Route path='solvableproblems' element={<Problems/>}/>
//       <Route path='problem/:problemid' element={<Problem/>}/>
//       <Route path='login' element={<Login/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      { path: "contactdev", element: <Contact /> },
      { path: "solvableproblems", element: <Problems /> },
      { path: "problem/:problemid", element: <Problem /> },
      { path: "createaproblem", element: <CreateAProblem/> },
      { path: "teacher", element: <Teacher/> },
      { path: "student", element: <Student/> },
      { path: "rankings", element: <Rankings/> }
    ],
  },
  { path: "/", element: <HomeUi/>},
  { path: "auth", element: <Auth /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer position="top-right" />
  </StrictMode>,
)
