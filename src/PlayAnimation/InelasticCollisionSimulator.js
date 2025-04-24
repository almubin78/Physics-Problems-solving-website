import React, { useState, useRef, useEffect } from "react";

export default function InelasticCollisionSimulator() {
  const [m1, setM1] = useState(2);
  const [u1, setU1] = useState(3);
  const [m2, setM2] = useState(3);
  const [u2, setU2] = useState(-1);
  const [x1, setX1] = useState(10);
  const [x2, setX2] = useState(80);
  const [running, setRunning] = useState(false);
  const [merged, setMerged] = useState(false);
  const [v, setV] = useState(0);
  const intervalRef = useRef(null);

  const initialKE = 0.5 * m1 * u1 ** 2 + 0.5 * m2 * u2 ** 2;
  const finalKE = merged ? 0.5 * (m1 + m2) * v ** 2 : 0;

  const handleStart = () => {
    setX1(10);
    setX2(80);
    setMerged(false);
    setRunning(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setX1((prev) => prev + u1 * 0.5);
      setX2((prev) => prev + u2 * 0.5);
    }, 100);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setRunning(false);
  };

  useEffect(() => {
    if (!merged && x2 - x1 <= 6) {
      const finalV = (m1 * u1 + m2 * u2) / (m1 + m2);
      setV(finalV);
      setMerged(true);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setX1((prev) => prev + finalV * 0.5);
        setX2((prev) => prev + finalV * 0.5);
      }, 100);
    }
  }, [x1, x2, m1, m2, u1, u2, merged]);

  return (
    <div className="p-4 max-w-2xl mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center animate-pulse">
        🔁 বিপরীত দিক থেকে সংঘর্ষ (Inelastic)
      </h1>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <h2 className="font-bold">বস্তু ১ (বাম থেকে ডানে)</h2>
          <label className="block text-gray-600">ভর (kg):</label>
          <input
            type="number"
            value={m1}
            onChange={(e) => setM1(+e.target.value)}
            className="border p-1 rounded w-full"
          />
          <label className="block text-gray-600 mt-2">
            প্রারম্ভিক বেগ (m/s):
          </label>
          <input
            type="number"
            value={u1}
            onChange={(e) => setU1(+e.target.value)}
            className="border p-1 rounded w-full"
          />
        </div>
        <div>
          <h2 className="font-bold">বস্তু ২ (ডান থেকে বামে)</h2>
          <label className="block text-gray-600">ভর (kg):</label>
          <input
            type="number"
            value={m2}
            onChange={(e) => setM2(+e.target.value)}
            className="border p-1 rounded w-full"
          />
          <label className="block text-gray-600 mt-2">
            প্রারম্ভিক বেগ (m/s):
          </label>
          <input
            type="number"
            value={-u2}
            onChange={(e) => setU2(-Math.abs(+e.target.value))}
            className="border p-1 rounded w-full"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleStart}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Start
        </button>
        <button
          onClick={handleStop}
          className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Stop
        </button>
      </div>

      <div className="relative h-24 bg-gray-200 border rounded overflow-hidden">
        {!merged && (
          <>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full text-[10px] text-white flex items-center justify-center"
              style={{ left: `${x1}%`, transition: "left 0.1s linear" }}
              title={`v = ${u1} m/s`}
            >
              {`v=${u1}`}
            </div>
            <div
              className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center"
              style={{ left: `${x2}%`, transition: "left 0.1s linear" }}
              title={`v = ${u2} m/s`}
            >
              {`v=${u2}`}
            </div>
          </>
        )}
        {merged && (
          <div
            className="absolute top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 rounded-full text-[11px] text-white flex items-center justify-center"
            style={{ left: `${x1}%`, transition: "left 0.1s linear" }}
            title={`v = ${v.toFixed(2)} m/s`}
          >
            {`${v.toFixed(1)} m/s`}
          </div>
        )}
      </div>

      <div className="text-sm text-gray-800 bg-gray-100 p-4 rounded shadow-inner animate-fade-in space-y-2 border">
        <h2 className="font-bold text-center text-blue-600">
          📊 সংঘর্ষ বিশ্লেষণ
        </h2>
        <div className="grid grid-cols-2 gap-2">
          <p>
            <span className="font-semibold">🔹 সম্মিলিত বেগ:</span>{" "}
            {merged ? `${v.toFixed(2)} m/s` : "সংঘর্ষ হয়নি এখনো"}
          </p>
          <p>
            <span className="font-semibold">🔹 বর্তমান দূরত্ব:</span>{" "}
            {Math.max(0, (x2 - x1).toFixed(2))}%
          </p>
          <p>
            <span className="font-semibold">🔹 শুরুতে মোট গতিশক্তি:</span>{" "}
            {initialKE.toFixed(2)} J
          </p>
          <p>
            <span className="font-semibold">🔹 সংঘর্ষের পর মোট গতিশক্তি:</span>{" "}
            {merged ? `${finalKE.toFixed(2)} J` : "N/A"}
          </p>
          <p className="col-span-2">
            <span className="font-semibold">🔹 শক্তি ক্ষয়:</span>{" "}
            {merged ? `${(initialKE - finalKE).toFixed(2)} J` : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}
