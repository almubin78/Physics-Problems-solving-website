import { createBrowserRouter } from "react-router-dom";
import HomePage from "../CommonPages/HomePage";
import SimpleCalculate from "../SimpleCalculate/SimpleCalculate";
import SolvingHomePage from "../Laws-integrations/SolvingHomePage";
import ErrorPage from "../CommonPages/ErrorPage";
import MotionCalculator from "../Laws-integrations/chapterBased/Motion/MotionCalculator";
import ForceCalculator from "../Laws-integrations/chapterBased/Force/ForceCalculator";
import WorkPowerEnergy from "../Laws-integrations/chapterBased/WorkPowerEnergy/WorkPowerEnergy";
import SoundAndWave from "../Laws-integrations/chapterBased/SoundAndWave/SoundAndWave";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomePage/>,
        children:[
            {
                path:'/simple-calculate',
                element:<SimpleCalculate/>,
            },
            {
                path:'/laws-integrations',
                element:<SolvingHomePage/>,
                children:[
                    {
                        path:'/laws-integrations/motion',
                        element:<MotionCalculator/>
                    },
                    {
                        path:'/laws-integrations/force',
                        element:<ForceCalculator/>
                    },
                    {
                        path:'/laws-integrations/work-power-energy',
                        element:<WorkPowerEnergy/>
                    },
                    {
                        path:'/laws-integrations/sound-and-wave',
                        element:<SoundAndWave/>
                    },
                ]
            },
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

