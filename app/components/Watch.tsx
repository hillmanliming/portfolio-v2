"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Watch() {
  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);
  const secondRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;
    let isFocused = true;

    const onFocus = () => {
      isFocused = true;
    };

    const onBlur = () => {
      isFocused = false;
    };

    window.addEventListener("focus", onFocus);
    window.addEventListener("blur", onBlur);

    const animate = () => {
      if (document.hidden || !isFocused) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const now = new Date();

      const ms = now.getMilliseconds();
      const sec = now.getSeconds() + ms / 1000;
      const min = now.getMinutes() + sec / 60;
      const hr = (now.getHours() % 12) + min / 60;

      const hourDeg = hr * 30;
      const minuteDeg = min * 6;
      const secondDeg = sec * 6;

      if (hourRef.current)
        hourRef.current.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
      if (minuteRef.current)
        minuteRef.current.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
      if (secondRef.current)
        secondRef.current.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("blur", onBlur);
    };
  }, []);
  return (
    <div className="clock fade-in">
      <div className="logo">
        <Image
          className=" justify-self-center"
          src="/Vector.svg"
          height={30}
          width={21}
          alt="Logo"
          priority
        ></Image>
      </div>

      <div ref={hourRef} className="hand hour"></div>
      <div ref={minuteRef} className="hand minute"></div>
      <div ref={secondRef} className="hand second"></div>
      <p className="name">LI-MING HILLMAN</p>
    </div>
  );
}
