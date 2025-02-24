export const getAllPlaceholderNew = (inputName) => {
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
      case "কাজ":
        return "কাজের মান বসাও (J)";
      case "h":
        return "উচ্চতার মান বসাও (m)";
      case "F":
        return "বলের মান বসাও (N)";
      case "f":
        return "কম্পাংকের মান বসাও (Hz)";
      case "λ":
        return "তরঙ্গদৈর্ঘের মান বসাও (m)";
      case "T":
        return "পর্যায়কালের মান বসাও (s)";
      default:
        return `Enter ${inputName}`;
    }
  };