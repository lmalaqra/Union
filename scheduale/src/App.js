import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from "react-router-dom";
import Home from "./assets/pages/Home";
import HomeRegister from "./assets/pages/HomeRegister";

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>this User Already exists</div>;
}
function App() {
  const router = createBrowserRouter([
    {
      path: "/register",
      element: <HomeRegister />,
      errorElement: <ErrorBoundary />,
    },
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorBoundary />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
