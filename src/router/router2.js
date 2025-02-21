import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../CommonPages/ErrorPage";
import GenericCalculator from "../NewLy/commonUI/CalculatorDesign/GenericCalculator";

export const router2 = createBrowserRouter([
    {
      path: "/",
      element: <GenericCalculator/>,
      children: [],
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);