import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import ErrorPage from "../CommonPages/ErrorPage";
import HomePageInfo from "../CommonPages/HomePageInfo";
import PhysicsSolvingHomePage from "../PysicsCalculatePart/PhysicsSolvingHomePage";
import MotionCalculator from "../PysicsCalculatePart/CalculateChapters/MotionCalculator";
import ForceCalculator from "../PysicsCalculatePart/CalculateChapters/ForceCalculator";
import WorkPowerEnergy from "../PysicsCalculatePart/CalculateChapters/WorkPowerEnergy";
import SoundAndWaveCalculator from "../PysicsCalculatePart/CalculateChapters/SoundAndWaveCalculator";
import LawSelectionHomePage from "../PhysicsLawSelection/LawSelectionHomePage";
import FormulaFinderForMotion from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForMotion";
import MatterAndPressure from "../PysicsCalculatePart/CalculateChapters/MatterAndPressure";
import FormulaFinderForForce from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForForce";
import FormulaFinderForSoundAndWave from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForSoundAndWave";
import UnitHome from "../UnitCalculator/UnitHome";
import ProcessingPageMessage from "../CommonPages/ProcessingPageMessage";
import MotionSimulator from "../PlayAnimation/MotionSimulator";
import AnimationHome from "../PlayAnimation/AnimationHome";
import InelasticCollisionSimulator from "../PlayAnimation/InelasticCollisionSimulator";
import GravitySimulator from "../PlayAnimation/GravitySimulator";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <HomePageInfo/>
      },
      {
        path: "/unit-calculator",
        element: <UnitHome />,
      },
      {
        path: "/laws-integrations",
        element: <PhysicsSolvingHomePage />,
        children: [
          {
            path: "/laws-integrations/motion",
            element: <MotionCalculator />,
          },

          {
            path: "/laws-integrations/force",
            element: <ForceCalculator />,
          },
          {
            path: "/laws-integrations/work-power-energy",
            element: <WorkPowerEnergy />,
          },
          {
            path: "/laws-integrations/sound-and-wave",
            element: <SoundAndWaveCalculator />,
          },
          {
            path: "/laws-integrations/matterAndPressure",
            element: <MatterAndPressure/>
          },
        ],
      },
      {
        path: "/laws-selection",
        element: <LawSelectionHomePage/>,
        children:[
            {
                path: "/laws-selection/motion",
                element: <FormulaFinderForMotion/>, 
            },
            {
                path: "/laws-selection/force",
                element: <FormulaFinderForForce/>, 
            },
            {
                path: "/laws-selection/sound-and-wave",
                element: <FormulaFinderForSoundAndWave/>, 
            },
        ]
      },
    ],
  },
  {
    path: "/playAnimation",
    element: <AnimationHome />,
    children:[
      {
          path: "/playAnimation/time",
          element: <MotionSimulator/>, 
      },
      {
          path: "/playAnimation/mv",
          element: <InelasticCollisionSimulator/>, 
      },
      {
          path: "/playAnimation/Falling-object",
          element: <GravitySimulator/>, 
      },
      
  ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/message",
    element: <ProcessingPageMessage />,
  },
]);
