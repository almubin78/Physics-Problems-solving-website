
import './App.css';
import ForceCalculator from './chapterBased/Force/ForceCalculator';
import MotionCalculator from './chapterBased/Motion/MotionCalculator';


function App() {
  

  return (
    <div className="App">
      <h1 className="text-2xl mt-5 font-bold text-purple-500 mb-4"> নবম দশম শ্রেনির পদার্থ বিজ্ঞানের গাণিতিক সমাধান। </h1>
      <MotionCalculator/>
      <ForceCalculator/>
    </div>
  );
}

export default App;
