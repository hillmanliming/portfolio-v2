"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Watch() {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();

      const ms = now.getMilliseconds();
      const sec = now.getSeconds() + ms / 1000;
      const min = now.getMinutes() + sec / 60;
      const hr = (now.getHours() % 12) + min / 60;

      const hourDeg = hr * 30; // 360/12
      const minuteDeg = min * 6; // 360/60
      const secondDeg = sec * 6; // 360/60

      if (hourRef.current)
        hourRef.current.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
      if (secondRef.current)
        secondRef.current.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
    };

    tick(); // initial sync

    const interval = setInterval(tick, 1000 / 6); // 6 ticks per sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="clock">
      <div className="logo">
        <Image
          className="image-sizing block justify-self-center"
          src="/Vector.svg"
          height={30}
          width={21}
          alt="Logo"
        ></Image>
      </div>

      <div ref={hourRef} className="hand hour"></div>
      <div ref={minuteRef} className="hand minute"></div>
      <div ref={secondRef} className="hand second"></div>
      <p className="name">LI-MING HILLMAN</p>
    </div>
  );
}
