import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date("2025-12-12T10:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-pink-100 p-10">
      <h2 className="text-3xl font-semibold mb-4">Hitung Mundur</h2>
      <p>{timeLeft.days} Hari {timeLeft.hours} Jam {timeLeft.minutes} Menit {timeLeft.seconds} Detik</p>
    </section>
  );
}

export default Countdown;
