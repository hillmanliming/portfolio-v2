"use client";
import { useEffect, useRef } from "react";
export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.4;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.4;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate(${pos.current.x}px, ${pos.current.y}px)
          translate(-50%, -50%)
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Hover detection
  useEffect(() => {
    const elements = document.querySelectorAll(
      "a, button, [data-cursor='hover']"
    );

    const add = () => cursorRef.current?.classList.add("hovered");
    const remove = () => cursorRef.current?.classList.remove("hovered");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
