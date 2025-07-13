import React, { useState, useEffect } from "react";
import styles from "../styles/Pomodoro.module.css";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { RotateCwIcon } from "lucide-react";

const Pomodoro: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutos en segundos
  const [isRunning, setIsRunning] = useState(false);

  // Función que convierte segundos a mm:ss
  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className={styles.Pomodoro}>
      <h3 className={styles.pomodoroTitle}>Pomodoro timer</h3>
      <p className={styles.Timer}>{formatTime(timeLeft)}</p>
      <button className={styles.botonesPomodoro} onClick={handleStartPause}>
        {isRunning ? <Pause /> : <Play />}
      </button>
      <button className={styles.botonesPomodoro} onClick={handleReset}><RotateCwIcon/></button>
    </div>
  );
};

export default Pomodoro;