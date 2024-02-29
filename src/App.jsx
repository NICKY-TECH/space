import "/src/styles/destination.css"
import {Main,Home,PlanetParent} from "/src/index";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main />}>
        <Route path="/" element={<Home/>} />
        <Route path="destination" element={<PlanetParent/>} />
      </Route>
    )
  );


  return <RouterProvider router={router} />

}

export default App
