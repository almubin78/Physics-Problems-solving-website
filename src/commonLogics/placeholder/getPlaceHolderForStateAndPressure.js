export const getPlaceholderForStateAndPressure = (inputName) => {
    switch (inputName) {
        case "V":
          return "আয়তনের মান বসাও (ঘনমিটার)";
        case "ρ":
          return "ঘনত্বের মান বসাও  (কেজি/ঘনমিটার))";
        case "F":
          return "বলের মান বসাও (নিউটন)";
        case "F1":
          return "প্রথম পিষ্টনে প্রযুক্ত বল (নিউটন)";
        case "F2":
          return "২য় পিষ্টনে প্রযুক্ত বল (নিউটন)";
        case "h":
          return "গভীরতার মান বসাও (মিটার)";
        case "m":
          return "বস্তুর ভরের মান বসাও (কেজি)";
        case "A":
          return "ক্ষেত্রফলের মান বসাও (বর্গমিটার)";
        case "A1":
          return "প্রথম পিষ্টনের ক্ষেত্রফল (বর্গমিটার)";
        case "A2":
          return "২য় পিষ্টনের ক্ষেত্রফল (বর্গমিটার)";
        default:
          return `Enter ${inputName}`;
      }
     
    
  };