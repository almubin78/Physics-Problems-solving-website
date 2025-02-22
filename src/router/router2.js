import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../CommonPages/ErrorPage";
import MotionCalculator from "../NewLy/commonUI/CalculateChapters/MotionCalculator";

export const router2 = createBrowserRouter([
    {
      path: "/",
      element: <MotionCalculator/>,
      children: [],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);