import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeUi from './Screens/Home/HomeUi.jsx'
import Contact from './Screens/ContactDev/Contact.jsx'
import Problems from './Screens/solvableProblems/Problems.jsx'
import Problem from './Screens/Problem/Problem.jsx'
import CreateAProblem from './Screens/createAProblem/createAProblem.jsx'
import Teacher from './Screens/Teacher/Teacher.jsx'
import Student from './Screens/Student/Student.jsx'
import Auth from './Screens/Auth/Auth.jsx'

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
      { path: "student", element: <Student/> }
    ],
  },
  { path: "/", element: <HomeUi/>},
  { path: "auth", element: <Auth /> }
]);



// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


// if (!PUBLISHABLE_KEY) {
//   throw new Error("Missing Publishable Key")
// }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
