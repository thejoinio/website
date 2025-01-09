import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // e.g. '2025-01-01T00:00:00'
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [isCountdownVisible, setIsCountdownVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        setIsCountdownVisible(false);
      } else {
        setIsCountdownVisible(true)
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60),
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setDays(String(days).padStart(2, "0"));
        setHours(String(hours).padStart(2, "0"));
        setMinutes(String(minutes).padStart(2, "0"));
        setSeconds(String(seconds).padStart(2, "0"));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!isCountdownVisible) {
    return null;
  }

  return (
    <div
      className={`rounded-lg w-fit md:min-w-[385px] mx-auto h-fit min-h-[90px] flex gap-[34.461px] shrink-0 mb-8 px-6 py-3`}
      style={{
        border: "1.077px solid #8AE5CF",
        background: "linear-gradient(98deg, rgba(102, 254, 203, 0.20) 6.1%, rgba(137, 64, 255, 0.20) 103.66%)",
        boxShadow: "0px 0px 8.027px 0px #6F53B8",
        backdropFilter: "blur(1.0769164562225342px)"
      }}
    >
      <div>
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{days}</h4>
        <p className="text-xs md:text-[13.378px] text-center">day</p>
      </div>
      
      <div>
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{hours}</h4>
        <p className="text-xs md:text-[13.378px] text-center">hr</p>
      </div>
      
      <div>
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{minutes}</h4>
        <p className="text-xs md:text-[13.378px] text-center">min</p>
      </div>
      
      <div>
        <h4 className="text-3xl md:text-[37.458px] mb-0.5 min-w-[38px] md:min-w-[48px]">{seconds}</h4>
        <p className="text-xs md:text-[13.378px] text-center">sec</p>
      </div>
    </div>
  );
};

export default Countdown;
