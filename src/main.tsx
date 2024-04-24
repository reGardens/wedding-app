import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.tsx'
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page.tsx";

const router = createBrowserRouter(
  // createRoutesFromElements(
  //   <Route
  //   path="teams/:teamId"
  // the matching param will be available to the loader
  // loader={({ params }) => {
  //   console.log(params.teamId); // "hotspur"
  // }}
  // and the action
  //   action={({ params }) => { }}
  //   errorElement={<ErrorBoundary />}
  // element={<App />}
  // />
  // )
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:teamId",
      element: <App />,
    },
  ]
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
