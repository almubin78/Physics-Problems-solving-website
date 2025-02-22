import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../CommonPages/ErrorPage";
import MotionCalculator from "../NewLy/commonUI/CalculateChapters/MotionCalculator";
import MainPage from "../NewLy/AllHomePages/MainPage";
import ForceCalculator from "../NewLy/commonUI/CalculateChapters/ForceCalculator";

export const router2 = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {path: "/motion",
          element: <MotionCalculator/>,
        },
        {path: "/force",
          element: <ForceCalculator/>,
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);