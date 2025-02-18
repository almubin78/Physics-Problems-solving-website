
import {  RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './router/router';


function App() {
  

  return (
    <div className="App w-3/5 mx-auto items-center">
      <h1 className="text-2xl mt-5 font-bold text-purple-500 mb-4"> নবম দশম শ্রেনির পদার্থ বিজ্ঞানের গাণিতিক সমাধান। </h1>
      
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
