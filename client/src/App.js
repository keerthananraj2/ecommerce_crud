// import logo from './logo.svg';
// import './App.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Add from "./components/addrecipes/Add.jsx"
import Recipe from "./components/getrecipes/Get.jsx";
import Edit from "./components/updaterecipes/Update.jsx";

function App(){
  const route = createBrowserRouter([
    {
      path:"/add",
      element:<Add/>
    },
    {
      path:"/",
      element:<Recipe/>
    },
    {
      path:"/edit/:id",
      element:<Edit/>
    }

  ])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  )
}
export default App;




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;