import "/src/styles/destination.css"
import {Main,Home,PlanetParent,PlanetSubComponent,EuropaDetails,MoonDetails,MarsDetails,TitanDetails} from "/src/index";
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
        <Route path="destination" element={<PlanetParent/>} >
        <Route path="" element={<PlanetSubComponent/>} >
        <Route path="europa" element={<EuropaDetails/>} />
        <Route path=""  element={<MoonDetails/>} />
        <Route path="mars" element={<MarsDetails/>} />
        <Route path="titan" element={<TitanDetails/>} />

        </Route>
        </Route>
      </Route>
    )
  );


  return <RouterProvider router={router} />

}

export default App
