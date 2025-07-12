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
import FormulaFinderForMotionHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForMotionHomePage";
import MatterAndPressure from "../PysicsCalculatePart/CalculateChapters/MatterAndPressure";
import FormulaFinderForceHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForceHomePage";
import FormulaFinderForSoundAndWaveHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForSoundAndWaveHomePage";
import UnitHome from "../UnitCalculator/UnitHome";
import ProcessingPageMessage from "../CommonPages/ProcessingPageMessage";
import MotionSimulator from "../PlayAnimation/MotionSimulator";
import AnimationHome from "../PlayAnimation/AnimationHome";
import InelasticCollisionSimulator from "../PlayAnimation/InelasticCollisionSimulator";
import GravitySimulator from "../PlayAnimation/GravitySimulator";
import FormulaFinderForWorkPowerHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForWorkPowerHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <HomePageInfo />,
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
            element: <MatterAndPressure />,
          },
        ],
      },
      {
        path: "/laws-selection",
        element: <LawSelectionHomePage />,
        children: [
          {
            path: "/laws-selection/motion",
            element: <FormulaFinderForMotionHomePage />,
          },
          {
            path: "/laws-selection/force",
            element: <FormulaFinderForceHomePage />,
          },
          {
            path: "/laws-selection/work-power-energy",
            element: <FormulaFinderForWorkPowerHomePage/>
          },
          {
            path: "/laws-selection/sound-and-wave",
            element: <FormulaFinderForSoundAndWaveHomePage />,
          },
        ],
      },
      {
        path: "/playAnimation",
        element: <AnimationHome />,
        children: [
          {
            path: "/playAnimation/time",
            element: <MotionSimulator />,
          },
          {
            path: "/playAnimation/mv",
            element: <InelasticCollisionSimulator />,
          },
          {
            path: "/playAnimation/Falling-object",
            element: <GravitySimulator />,
          },
        ],
      },
    ],
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
