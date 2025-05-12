## animate Function এর বর্ণনা। 
``
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const t = (timestamp - startTimeRef.current) / 1000;
      setTime(t);

      let y;
      if (mode === "falling") {
        y = 0.5 * g * t * t;
        const progress = Math.min((y / height) * 100, 100);
        setPosition(progress);
        if (progress >= 100) {
          setRunning(false);
          cancelAnimationFrame(requestRef.current);
        } else {
          requestRef.current = requestAnimationFrame(animate);
        }
      } else {
        y = initialVelocity * t - 0.5 * g * t * t;
        const relativeHeight = Math.max(0, Math.min(height, y));
        const progress = 100 - (relativeHeight / height) * 100;
        setPosition(progress);
        if (y < 0 && t > 0.2) {
          setRunning(false);
          cancelAnimationFrame(requestRef.current);
        } else {
          requestRef.current = requestAnimationFrame(animate);
        }
      }
    };
``
```
// এই ফাংশনটি অ্যানিমেশন চালানোর জন্য প্রতি ফ্রেমে একবার করে চলে
const animate = (timestamp) => {
  // প্রথমবার অ্যানিমেশন শুরু হলে শুরু সময় রেকর্ড করি
  if (!startTimeRef.current) startTimeRef.current = timestamp;

  // কত সময় (সেকেন্ড) অতিক্রান্ত হয়েছে তা বের করি
  const t = (timestamp - startTimeRef.current) / 1000;

  // UI তে সময় দেখানোর জন্য স্টেটে রাখি
  setTime(t);

  let y; // বস্তুটি কতদূর উঠেছে বা নেমেছে (মিটার)

  if (mode === "falling") {
    // উপর থেকে পড়ার ক্ষেত্রে y = 0.5 * g * t^2
    y = 0.5 * g * t * t;

    // কত শতাংশ নিচে নেমেছে তা হিসাব করি (প্রগ্রেস বার)
    const progress = Math.min((y / height) * 100, 100);

    // সেই progress অনুযায়ী বস্তু UI-তে কতটা নিচে থাকবে তা সেট করি
    setPosition(progress);

    // যদি বস্তু মাটিতে পৌঁছে যায়, তাহলে অ্যানিমেশন বন্ধ করি
    if (progress >= 100) {
      setRunning(false);
      cancelAnimationFrame(requestRef.current);
    } else {
      // না হলে পরের ফ্রেমের জন্য animate আবার চালাই
      requestRef.current = requestAnimationFrame(animate);
    }
  } else {
    // নিচ থেকে ছোঁড়া হলে y = ut - 0.5gt^2
    y = initialVelocity * t - 0.5 * g * t * t;

    // y যেন height এর মধ্যে সীমাবদ্ধ থাকে, তাই max/min ব্যবহার
    const relativeHeight = Math.max(0, Math.min(height, y));

    // progress হিসাব করি — 100% মানে নিচে নেমে গেছে
    const progress = 100 - (relativeHeight / height) * 100;

    // বস্তু UI-তে কোথায় থাকবে তা সেট করি
    setPosition(progress);

    // যদি বস্তু নিচে পড়ে যায়, এবং একটু সময় পেরিয়ে গেছে, তবে বন্ধ করি
    if (y < 0 && t > 0.2) {
      setRunning(false);
      cancelAnimationFrame(requestRef.current);
    } else {
      // না হলে পরের ফ্রেম চালাই
      requestRef.current = requestAnimationFrame(animate);
    }
  }
};

```
