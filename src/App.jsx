import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import About from './About/About';
import Layout from './Layout/Layout';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
function App() {
let routers= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
  ]}
])
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App;
