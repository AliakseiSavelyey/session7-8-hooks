import { useState, useEffect, useRef } from 'react';
import './Clock.scss';

export default function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

    // ниже очистка перед уходом,(размонтирование) аналог componentWillUnmount.Вызывается каждый раз перед следующим запуском useEffect
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Clock-face">
      <p>Текущее время: {time.toLocaleTimeString()}</p>
    </div>
  );
}
