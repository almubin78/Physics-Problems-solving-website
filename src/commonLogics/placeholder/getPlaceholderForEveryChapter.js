export const getPlaceholderForMotion = (inputName) => {
    switch (inputName) {
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
      default:
        return `Enter ${inputName}`;
    }
  };
export const getPlaceholderForForce = (inputName) => {
    switch (inputName) {
      case "m":
        return "বস্তুর ভরের মান বসাও (kg)";
      case "m'":
        return "ছোট বস্তুর ভরের মান বসাও (kg)";
      case "M":
        return "বড় বস্তুর ভরের মান বসাও (kg)";
      case "m1":
        return "১ম বস্তুর ভরের মান বসাও  (kg)";
      case "m2":
        return "২য় বস্তুর ভরের মান বসাও (kg)";
      case "u":
        return "বস্তুর আদিবেগের মান বসাও (m/s)";
      case "t":
        return "সময়ের মান বসাও (s)";
      case "a":
        return "ত্বরণের মান বসাও (m/s^2)";
      case "v":
        return "বস্তুর শেষবেগের মান বসাও (m/s)";
      case "v1":
        return "১ম বস্তুর শেষবেগের মান বসাও (m/s)";
      case "v2":
        return "২য় বস্তুরশেষবেগের মান বসাও (m/s)";
      case "u1":
        return "১ম বস্তুর আদিবেগের মান বসাও (m/s)";
      case "u2":
        return "২য় বস্তুর আদিবেগের মান বসাও (m/s)";
      case "r":
        return "মধ্যবর্তী দুরত্বের মান বসাও (m)";
      default:
        return `Enter ${inputName}`;
    }
  };
export const getPlaceholderForWorkPowerEnergy = (inputName) => {
    switch (inputName) {
      case "m":
        return "ভরের মান বসাও (kg)";
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
export const getPlaceholderForSoundAndWave = (inputName) => {
    switch (inputName) {
      case "λ":
        return "তরঙ্গদৈর্ঘ্যের মান বসাও (m)";
      case "v":
        return "বেগের মান বসাও  (m/s)";
      case "f":
        return "কম্পাংকের মান বসাও (Hz বা 1/s)";
      case "T":
        return "পর্যায়কালের মান বসাও (s)";
      default:
        return `Enter ${inputName}`;
    }
  };