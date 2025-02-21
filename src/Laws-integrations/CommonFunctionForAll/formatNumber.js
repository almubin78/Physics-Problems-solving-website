export const formatNumber = (num) => {
    if (Math.abs(num) >= 1e6 || (Math.abs(num) <= 1e-3 && num !== 0)) {
      return num.toExponential(2); // বৈজ্ঞানিক নোটেশন
    } else if (Number.isInteger(num)) {
      return num; // পূর্ণসংখ্যা থাকলে
    } else {
      return num.toFixed(3); // দশমিক সংখ্যা থাকলে দুই দশমিক পর্যন্ত রাখবে
    }
  };
export const getPlaceholderAll = (inputName) => {
    switch (inputName) {
      case "m":
        return "ভরের মান বসাও (kg)";
      case "a":
        return "ত্বরণের মান বসাও (m/s²)";
      case "v":
        return "শেষবেগের মান বসাও (m/s)";
      case "u":
        return "আদিবেগের মান বসাও (m/s)";
      case "t":
        return "সময়ের মান বসাও (s)";
      case "s":
        return "সরনের মান বসাও (m)";
      case "m1":
        return "১ম বস্তুর ভরের মান বসাও  (kg)";
      case "m2":
        return "২য় বস্তুর ভরের মান বসাও (kg)";
      case "v1":
        return "১ম বস্তুর শেষবেগের মান বসাও (m/s)";
      case "v2":
        return "২য় বস্তুরশেষবেগের মান বসাও (m/s)";
      case "u1":
        return "১ম বস্তুর আদিবেগের মান বসাও (m/s)";
      case "u2":
        return "২য় বস্তুর আদিবেগের মান বসাও (m/s)";
      default:
        return `Enter ${inputName}`;
    }
  };