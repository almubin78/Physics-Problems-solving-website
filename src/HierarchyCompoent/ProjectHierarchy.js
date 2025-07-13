import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Calculator,
  BookOpen,
  Film,
  AlertTriangle,
  MessageSquare,
} from "lucide-react";

const ProjectHierarchy = () => {
  const [expanded, setExpanded] = useState({
    root: true,
    calculations: true,
    formulas: true,
    animations: true,
  });

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="card bg-base-100 shadow-xl mb-8">
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold text-primary">
          Project Route Hierarchy
        </h2>
        <div className="divider"></div>

        <div className="space-y-1">
          {/* Root */}
          <div className="collapse collapse-plus bg-base-200">
            <input
              type="checkbox"
              checked={expanded.root}
              onChange={() => toggleExpand("root")}
            />
            <div className="collapse-title font-medium flex items-center">
              {expanded.root ? (
                <ChevronDown className="mr-2" />
              ) : (
                <ChevronRight className="mr-2" />
              )}
              <Home className="mr-2 h-4 w-4" />
              <span>/ (HomePage)</span>
            </div>
            <div className="collapse-content pl-8">
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <span className="ml-6">/ (HomePageInfo)</span>
                </div>
                <div className="flex items-center">
                  <span className="ml-6">/unit-calculator (UnitHome)</span>
                </div>

                {/* Calculations */}
                <div className="collapse collapse-plus bg-base-100 mt-2">
                  <input
                    type="checkbox"
                    checked={expanded.calculations}
                    onChange={() => toggleExpand("calculations")}
                  />
                  <div className="collapse-title font-medium flex items-center px-0">
                    {expanded.calculations ? (
                      <ChevronDown className="mr-2" />
                    ) : (
                      <ChevronRight className="mr-2" />
                    )}
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>/physics-calculator (PhysicsSolvingHomePage)</span>
                  </div>
                  <div className="collapse-content pl-8">
                    <div className="mt-2 space-y-1">
                      <div className="ml-6">/motion (MotionCalculator)</div>
                      <div className="ml-6">/force (ForceCalculator)</div>
                      <div className="ml-6">
                        /work-power-energy (WorkPowerEnergy)
                      </div>
                      <div className="ml-6">
                        /sound-and-wave (SoundAndWaveCalculator)
                      </div>
                      <div className="ml-6">
                        /matterAndPressure (MatterAndPressure)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Formulas */}
                <div className="collapse collapse-plus bg-base-100 mt-2">
                  <input
                    type="checkbox"
                    checked={expanded.formulas}
                    onChange={() => toggleExpand("formulas")}
                  />
                  <div className="collapse-title font-medium flex items-center px-0">
                    {expanded.formulas ? (
                      <ChevronDown className="mr-2" />
                    ) : (
                      <ChevronRight className="mr-2" />
                    )}
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>/find-laws (LawSelectionHomePage)</span>
                  </div>
                  <div className="collapse-content pl-8">
                    <div className="mt-2 space-y-1">
                      <div className="ml-6">
                        /motion (FormulaFinderForMotion)
                      </div>
                      <div className="ml-6">/force (FormulaFinderForForce)</div>
                      <div className="ml-6">
                        /sound-and-wave (FormulaFinderForSoundAndWave)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animations */}
                <div className="collapse collapse-plus bg-base-100 mt-2">
                  <input
                    type="checkbox"
                    checked={expanded.animations}
                    onChange={() => toggleExpand("animations")}
                  />
                  <div className="collapse-title font-medium flex items-center px-0">
                    {expanded.animations ? (
                      <ChevronDown className="mr-2" />
                    ) : (
                      <ChevronRight className="mr-2" />
                    )}
                    <Film className="mr-2 h-4 w-4" />
                    <span>/playAnimation (AnimationHome)</span>
                  </div>
                  <div className="collapse-content pl-8">
                    <div className="mt-2 space-y-1">
                      <div className="ml-6">/time (MotionSimulator)</div>
                      <div className="ml-6">
                        /mv (InelasticCollisionSimulator)
                      </div>
                      <div className="ml-6">
                        /Falling-object (GravitySimulator)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other routes */}
          <div className="flex items-center mt-2">
            <AlertTriangle className="mr-2 h-4 w-4 text-warning" />
            <span>* (ErrorPage)</span>
          </div>
          <div className="flex items-center">
            <MessageSquare className="mr-2 h-4 w-4 text-info" />
            <span>/message (ProcessingPageMessage)</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-base-200 rounded-box">
          <h3 className="font-bold text-lg mb-2">Key Sections:</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <Calculator className="mr-2 h-4 w-4" />
              <span>
                <strong>Physics Calculations</strong>: Interactive problem
                solvers
              </span>
            </li>
            <li className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              <span>
                <strong>Formula Finder</strong>: Tools to select physics
                formulas
              </span>
            </li>
            <li className="flex items-center">
              <Film className="mr-2 h-4 w-4" />
              <span>
                <strong>Animations</strong>: Visual physics simulations
              </span>
            </li>
            <li className="flex items-center">
              <Home className="mr-2 h-4 w-4" />
              <span>
                <strong>Unit Converter</strong>: Utility for conversions
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectHierarchy;
