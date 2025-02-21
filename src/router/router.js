import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import SimpleCalculate from "../SimpleCalculate/SimpleCalculate";
import SolvingHomePage from "../Laws-integrations/SolvingHomePage";
import ErrorPage from "../CommonPages/ErrorPage";
import MotionCalculator from "../Laws-integrations/chapterBased/Motion/MotionCalculator";
import ForceCalculator from "../Laws-integrations/chapterBased/Force/ForceCalculator";
import WorkPowerEnergy from "../Laws-integrations/chapterBased/WorkPowerEnergy/WorkPowerEnergy";
import SoundAndWave from "../Laws-integrations/chapterBased/SoundAndWave/SoundAndWave";
import FormulaFinderForMotion from "../Laws-integrations/chapterBasedWhenLawUnKnown/Motion/FormulaFinderForMotion";
import LawSelectionHomePage from "../Laws-integrations/LawSelectionHomePage";
import HomePageInfo from "../CommonPages/HomePageInfo";

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
        path: "/simple-calculate",
        element: <SimpleCalculate />,
      },
      {
        path: "/laws-integrations",
        element: <SolvingHomePage />,
        children: [
          {
            path: "/laws-integrations/motion",
            element: <MotionCalculator />,
          },
          // {
          //   path: "/laws-integrations/motion",
          //   element: <MotionCalculator2 />,
          // },

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
            element: <SoundAndWave />,
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
