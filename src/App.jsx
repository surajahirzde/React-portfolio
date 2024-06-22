import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Helper/RootLayout";
import ErrorPage from "./Helper/ErrorPage";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/Contact";

const App = () => {
  // This code snippet defines a React functional component called App. It creates a router using the createBrowserRouter function from the react-router-dom library. The router is configured with routes defined using JSX syntax. The routes include a root route with a layout component (<RootLayout />) and an error handling component (<ErrorPage />). The root route has two child routes: an index route with a Home component and a route for /about with an About component. The wildcard route * is used to handle all other routes and displays a "Page not found" message. The router is then rendered using the RouterProvider component, passing the created routes as a prop called router.
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<>Page not found</>} />
      </Route>
    )
  );

  return (
    <RouterProvider router={routes} fallbackElement={<div>Loading...</div>} />
  );
};

export default App;
