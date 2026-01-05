"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  /* =========================
     Mouse tracking
     ========================= */
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  /* =========================
     Cursor animation + idle hover check
     ========================= */
  useEffect(() => {
    let rafId: number;

    const animate = () => {
      pos.current.x = mouse.current.x;
      pos.current.y = mouse.current.y;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          translate(-50%, -50%)
        `;

        // -------------------
        // Hover detection
        // -------------------
        const el = document.elementFromPoint(
          mouse.current.x,
          mouse.current.y
        ) as HTMLElement | null;

        if (el?.closest("a, button, [data-cursor='hover']")) {
          cursorRef.current.classList.add("hovered");
        } else {
          cursorRef.current.classList.remove("hovered");
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(rafId);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
