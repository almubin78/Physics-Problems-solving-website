import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import ErrorPage from "../CommonPages/ErrorPage";
import HomePageInfo from "../CommonPages/HomePageInfo";

import WorkPowerEnergyHomePage from "../PysicsCalculatePart/CalculateChapters/WorkPowerEnergyCalculatorHomePage";

import LawSelectionHomePage from "../PhysicsLawSelection/LawSelectionHomePage";
import FormulaFinderForMotionHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForMotionHomePage";

import FormulaFinderForceHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForceHomePage";
import FormulaFinderForSoundAndWaveHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForSoundAndWaveHomePage";
import UnitHome from "../UnitCalculator/UnitHome";
import ProcessingPageMessage from "../CommonPages/ProcessingPageMessage";
import MotionSimulator from "../PlayAnimation/MotionSimulator";
import AnimationHome from "../PlayAnimation/AnimationHome";
import InelasticCollisionSimulator from "../PlayAnimation/InelasticCollisionSimulator";
import GravitySimulator from "../PlayAnimation/GravitySimulator";
import FormulaFinderForWorkPowerHomePage from "../PhysicsLawSelection/FormulaFinderChapter/FormulaFinderForWorkPowerHomePage";
import PhysicsCalculatorRootPage from "../PysicsCalculatePart/PhysicsCalculatorRootPage";
import MotionCalculatorHomePage from "../PysicsCalculatePart/CalculateChapters/MotionCalculatorHomePage";
import ForceCalculatorHomePage from "../PysicsCalculatePart/CalculateChapters/ForceCalculatorHomePage";
import SoundAndWaveCalculatorHomePage from "../PysicsCalculatePart/CalculateChapters/SoundAndWaveCalculatorHomePage";
import MatterAndPressureCalculatorHomePage from "../PysicsCalculatePart/CalculateChapters/MatterAndPressureCalculatorHomePage";

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
        path: "/physics-calculator",
        element: <PhysicsCalculatorRootPage />,
        children: [
          {
            path: "/physics-calculator/motion",
            element: <MotionCalculatorHomePage />,
          },

          {
            path: "/physics-calculator/force",
            element: <ForceCalculatorHomePage />,
          },
          {
            path: "/physics-calculator/work-power-energy",
            element: <WorkPowerEnergyHomePage />,
          },
          
          {
            path: "/physics-calculator/matterAndPressure",
            element: <MatterAndPressureCalculatorHomePage />,
          },
          {
            path: "/physics-calculator/sound-and-wave",
            element: <SoundAndWaveCalculatorHomePage />,
          },
        ],
      },
      {
        path: "/find-laws",
        element: <LawSelectionHomePage />,
        children: [
          {
            path: "/find-laws/motion",
            element: <FormulaFinderForMotionHomePage />,
          },
          {
            path: "/find-laws/force",
            element: <FormulaFinderForceHomePage />,
          },
          {
            path: "/find-laws/work-power-energy",
            element: <FormulaFinderForWorkPowerHomePage />,
          },
          {
            path: "/find-laws/sound-and-wave",
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
