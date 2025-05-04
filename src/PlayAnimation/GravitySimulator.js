import React, { useState, useRef } from "react";

export default function GravitySimulator() {
  const [mode, setMode] = useState("falling"); // 'falling' or 'thrown'
  const [initialVelocity, setInitialVelocity] = useState(0); // For thrown object
  const [height, setHeight] = useState(50); // in meters
  const [solveFor, setSolveFor] = useState("velocity");
  const [running, setRunning] = useState(false);
  const [position, setPosition] = useState(0); // in %
  const [time, setTime] = useState(0);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);

  const g = 9.8; // gravity m/s^2

  const handleStart = () => {
    setRunning(true);
    setTime(0);
    setPosition(0);
    startTimeRef.current = null;
  
    const totalTime =
      mode === "falling"
        ? Math.sqrt((2 * height) / g)
        : (initialVelocity + Math.sqrt(initialVelocity ** 2 + 2 * g * height)) / g;
  
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const t = (timestamp - startTimeRef.current) / 1000;
  
      // Calculate current height reached
      let y;
      if (mode === "falling") {
        y = 0.5 * g * t * t;
      } else {
        y = initialVelocity * t + 0.5 * g * t * t;
      }
  
      const progress = Math.min((y / height) * 100, 100);
      setTime(Math.min(t, totalTime));
      setPosition(progress);
  
      if (t >= totalTime || progress >= 100) {
        setRunning(false);
        cancelAnimationFrame(requestRef.current);
      } else {
        requestRef.current = requestAnimationFrame(animate);
      }
    };
  
    cancelAnimationFrame(requestRef.current);
    requestRef.current = requestAnimationFrame(animate);
  };
  
  const handleStop = () => {
    setRunning(false);
    cancelAnimationFrame(requestRef.current);
  };

  const mass = 1; // Assume 1 kg for energy calculations

  // Calculations
  const v =
    mode === "falling"
      ? Math.sqrt(2 * g * height)
      : Math.sqrt(initialVelocity ** 2 + 2 * g * height);

  const kineticEnergy = 0.5 * mass * v ** 2;
  const potentialEnergy = mass * g * height;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold text-center">Vertical Motion Simulator</h1>

      <div className="grid gap-3">
        <label>অবস্থা নির্বাচন করুন:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="falling">উপর থেকে ফেলা হয়েছে</option>
          <option value="thrown">ভূমি থেকে ছোঁড়া হয়েছে</option>
        </select>

        {mode === "thrown" && (
          <>
            <label>আদিবেগ (m/s):</label>
            <input
              type="number"
              value={initialVelocity}
              onChange={(e) => setInitialVelocity(+e.target.value)}
              className="border p-2 rounded"
            />
          </>
        )}

        <label>উচ্চতা (মিটার):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          className="border p-2 rounded"
        />

        <label>যা নির্ণয় করতে চান:</label>
        <select
          value={solveFor}
          onChange={(e) => setSolveFor(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="velocity">শেষ গতি</option>
          <option value="time">সময়</option>
          <option value="height">উচ্চতা</option>
          <option value="ke">গতিশক্তি (KE)</option>
          <option value="pe">স্থিতিশক্তি (PE)</option>
        </select>

        <div className="flex gap-4">
          <button
            onClick={handleStart}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Start
          </button>
          <button
            onClick={handleStop}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Stop
          </button>
        </div>
      </div>

      <div
        className="relative h-40 border rounded overflow-hidden bg-gradient-to-b from-blue-200 to-white"
      >
        <div
          className="absolute w-8 h-8 bg-green-600 rounded-full top-0 transform -translate-x-1/2 left-1/2"
          style={{
            top: `${position}%`,
            // transition: running ? "top 0.1s linear" : "none",
          }}
        ></div>
      </div>

      <div className="text-sm text-gray-700 mt-2 space-y-1">
        <p>
          <strong>সময়:</strong> {time.toFixed(2)} সেকেন্ড
        </p>
        {solveFor === "velocity" && (
          <p>
            <strong>শেষ গতি:</strong> {v.toFixed(2)} m/s
          </p>
        )}
        {solveFor === "time" && (
          <p>
            <strong>সময়:</strong>{" "}
            {mode === "falling"
              ? Math.sqrt((2 * height) / g).toFixed(2)
              : ((v - initialVelocity) / g).toFixed(2)}{" "}
            সেকেন্ড
          </p>
        )}
        {solveFor === "height" && (
          <p>
            <strong>উচ্চতা:</strong> {height.toFixed(2)} মিটার
          </p>
        )}
        {solveFor === "ke" && (
          <p>
            <strong>গতিশক্তি (KE):</strong> {kineticEnergy.toFixed(2)} জুল
          </p>
        )}
        {solveFor === "pe" && (
          <p>
            <strong>স্থিতিশক্তি (PE):</strong> {potentialEnergy.toFixed(2)} জুল
          </p>
        )}
      </div>
    </div>
  );
}

