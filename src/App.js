
import './App.css';
import ForceCalculator from './chapterBased/Force/ForceCalculator';
import MotionCalculator from './chapterBased/Motion/MotionCalculator';
import SoundAndWave from './chapterBased/SoundAndWave/SoundAndWave';
import WorkPowerEnergy from './chapterBased/WorkPowerEnergy/WorkPowerEnergy';
import FormulaFinderForMotion from './chapterBasedWhenLawUnKnown/Motion/FormulaFinderForMotion';


function App() {
  

  return (
    <div className="App w-3/5 mx-auto items-center">
      <h1 className="text-2xl mt-5 font-bold text-purple-500 mb-4"> নবম দশম শ্রেনির পদার্থ বিজ্ঞানের গাণিতিক সমাধান। </h1>
      {/* <MotionCalculator/>
      <ForceCalculator/>
      <WorkPowerEnergy/> */}
      <SoundAndWave/>
      <FormulaFinderForMotion/>
    </div>
  );
}

export default App;
