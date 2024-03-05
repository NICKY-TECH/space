import "/src/styles/destination.css"
import {Main,Home,PlanetParent,PlanetSubComponent,Crew,Technology,PlanetDetails} from "/src/index";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Main/>}>
        <Route index element={<Home/>} />
        <Route path="destination" element={<PlanetParent/>} >
        <Route path="" element={<PlanetSubComponent/>} >
        <Route path="europa" element={<PlanetDetails/>} />
 <Route path="" element={<PlanetDetails/>} />
        <Route path="mars" element={<PlanetDetails/>} />
        <Route path="titan" element={<PlanetDetails/>} />

        </Route>
        </Route>
        <Route path="crew" element={<Crew/>}/>
        <Route path="technology" element={<Technology/>} />
      </Route>
    )
  );


  return <RouterProvider router={router} />

}

export default App
