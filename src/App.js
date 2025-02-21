
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';
import { router2 } from './router/router2';


function App() {
  

  return (
    <div className="App  ">
      <h1 className="text-2xl mt-28 font-bold text-purple-500 mb-4"> নবম দশম শ্রেনির পদার্থ বিজ্ঞানের গাণিতিক সমাধান। </h1>
      
      <RouterProvider router={router2}>
      </RouterProvider>
    </div>
  );
}

export default App;
