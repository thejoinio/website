import { TimerDots } from "@/app/assets/svg";
import { inter } from "@/app/fonts";
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string; // The target date in a string format, e.g., '2024-12-31T00:00:00'
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
      className={`${inter.className} rounded-lg border border-opacity-30 w-fit md:min-w-[273px] h-fit min-h-[90px] flex shrink-0 silver-text-gradient mb-5 px-5 py-3`}
      style={{
        borderRadius: "13.378px",
        border: "0.669px solid rgba(255, 255, 255, 0.30)",
        background: "linear-gradient(144deg, #28272F 9.13%, #040404 62.89%)",
        boxShadow: "0px 0px 8.027px 0px #6F53B8",
      }}
    >
      <div className="silver-text-gradient">
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{days}</h4>
        <p className="text-xs md:text-[13.378px] text-center">Days</p>
      </div>
      <div className="h-[36px] mx-3 md:mx-6 items-center flex">
        <TimerDots />
      </div>
      <div className="silver-text-gradient">
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{hours}</h4>
        <p className="text-xs md:text-[13.378px] text-center">Hours</p>
      </div>
      <div className="h-[36px] mx-3 md:mx-6 items-center flex">
        <TimerDots />
      </div>
      <div className="silver-text-gradient">
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{minutes}</h4>
        <p className="text-xs md:text-[13.378px] text-center">Mins</p>
      </div>
      <div className="h-[36px] mx-3 md:mx-6 items-center flex">
        <TimerDots />
      </div>
      <div className="silver-text-gradient">
        <h4 className="text-3xl md:text-[37.458px] mb-0.5">{seconds}</h4>
        <p className="text-xs md:text-[13.378px] text-center">Secs</p>
      </div>
    </div>
  );
};

export default Countdown;
