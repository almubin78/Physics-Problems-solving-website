export const formatResultNumber = (num) => {
    if (Math.abs(num) >= 1e6 || (Math.abs(num) <= 1e-3 && num !== 0)) {
      //০.০০০ এর কম থেকে ৬ টা থেকে বেশি
      return num?.toExponential(2); // বৈজ্ঞানিক নোটেশন
    } else if (Number.isInteger(num)) {
      return num; // পূর্ণসংখ্যা থাকলে
    } else {
      return num.toFixed(3); // দশমিক সংখ্যা থাকলে দুই দশমিক পর্যন্ত রাখবে
    }
  };