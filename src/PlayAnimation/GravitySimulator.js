import React, { useState, useRef } from "react";

const g = 9.8; // gravitational acceleration (m/s²)

export default function GravitySimulator() {
  const [mode, setMode] = useState("fall"); // 'fall' or 'throw'
  const [height, setHeight] = useState(100); // initial height (m)
  const [velocity, setVelocity] = useState(0); // initial velocity (for throw only)
  const [mass, setMass] = useState(1); // in kg

  const [time, setTime] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(height);
  const [finalVelocity, setFinalVelocity] = useState(0);
  const [ke, setKE] = useState(0);
  const [pe, setPE] = useState(mass * g * height);
  const [running, setRunning] = useState(false);

  const startTimeRef = useRef(null);
  const requestRef = useRef(null);

  const reset = () => {
    cancelAnimationFrame(requestRef.current);
    setTime(0);
    setCurrentHeight(height);
    setFinalVelocity(0);
    setKE(0);
    setPE(mass * g * height);
    setRunning(false);
  };

  const simulate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const t = (timestamp - startTimeRef.current) / 1000; // convert to seconds
    setTime(t);

    let h, v;

    if (mode === "fall") {
      h = Math.max(height - 0.5 * g * t * t, 0);
      v = g * t;
    } else {
      h = Math.max(height + velocity * t - 0.5 * g * t * t, 0);
      v = velocity - g * t;
    }

    setCurrentHeight(h);
    setFinalVelocity(v);
    setKE(0.5 * mass * v * v);
    setPE(mass * g * h);

    if (h > 0) {
      requestRef.current = requestAnimationFrame(simulate);
    } else {
      setRunning(false);
    }
  };

  const start = () => {
    reset();
    setRunning(true);
    startTimeRef.current = null;
    requestRef.current = requestAnimationFrame(simulate);
  };

  return (
    <div className="max-w-lg mx-auto p-4 space-y-4">
      <h1 className="text-xl font-bold text-center">Gravity Simulator</h1>

      <div className="space-y-2">
        <label className="block">Mode:</label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="fall">Falling Object</option>
          <option value="throw">Thrown Object (Upward)</option>
        </select>

        <label className="block">Initial Height (m):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(+e.target.value)}
          className="border p-2 rounded w-full"
        />

        {mode === "throw" && (
          <>
            <label className="block">Initial Velocity (m/s):</label>
            <input
              type="number"
              value={velocity}
              onChange={(e) => setVelocity(+e.target.value)}
              className="border p-2 rounded w-full"
            />
          </>
        )}

        <label className="block">Mass (kg):</label>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(+e.target.value)}
          className="border p-2 rounded w-full"
        />

        <div className="flex gap-4 mt-4">
          <button
            onClick={start}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            disabled={running}
          >
            Start
          </button>
          <button
            onClick={reset}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="mt-4 bg-gray-50 p-4 rounded border text-sm space-y-2">
        <p>
          <strong>Time:</strong> {time.toFixed(2)} s
        </p>
        <p>
          <strong>Height:</strong> {currentHeight.toFixed(2)} m
        </p>
        <p>
          <strong>Final Velocity:</strong> {finalVelocity.toFixed(2)} m/s
        </p>
        <p>
          <strong>Kinetic Energy:</strong> {ke.toFixed(2)} J
        </p>
        <p>
          <strong>Potential Energy:</strong> {pe.toFixed(2)} J
        </p>
      </div>
    </div>
  );
}
