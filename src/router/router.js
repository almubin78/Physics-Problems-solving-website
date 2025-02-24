import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import ErrorPage from "../CommonPages/ErrorPage";
import HomePageInfo from "../CommonPages/HomePageInfo";
import UnitCalculator from "../UnitCalculator/UnitCalculator";
import PhysicsSolvingHomePage from "../PysicsCalculatePart/PhysicsSolvingHomePage";
import MotionCalculator from "../PysicsCalculatePart/CalculateChapters/MotionCalculator";
import ForceCalculator from "../PysicsCalculatePart/CalculateChapters/ForceCalculator";
import WorkPowerEnergy from "../PysicsCalculatePart/CalculateChapters/WorkPowerEnergy";
import SoundAndWaveCalculator from "../PysicsCalculatePart/CalculateChapters/SoundAndWaveCalculator";
import LawSelectionHomePage from "../PhysicsLawSelection/LawSelectionHomePage";
import FormulaFinderForMotion from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForMotion";
import MatterAndPressure from "../PysicsCalculatePart/CalculateChapters/MatterAndPressure";


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
        element: <UnitCalculator />,
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
            }
        ]
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
